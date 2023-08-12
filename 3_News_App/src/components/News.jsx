import NewsItem from "./NewsItem";
// import Loader from "./Loader";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const News = (props) => {

    const [newsData, setNewsData] = useState([]); // empty array
    const [pageNum, setPageNum] = useState(1); // page number of url
    const [totalResults, setTotalResults] = useState(0); // initial total result will be 0

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase().slice() + word.slice(1);
    }
    const fetchData = async (pageNum) => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNum}&pageSize=${props.listOfArticles}`;
        try {
            props.progress(50);
            const response = await fetch(url)
            if (!response.ok) {
                throw Error("Could not retrieve response from Server");
            }

            const jsonData = await response.json();
            setNewsData(jsonData.articles); // updating state
            setTotalResults(jsonData.totalResults); // getting result parameter
            props.progress(100);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = `News - ${capitalize(props.category)}`;
        fetchData(pageNum);
    }, [props.category, pageNum]); // If any of these values changes, the effect will be triggered again, and the function will be executed.

    useEffect(() => {
        setPageNum(1);
    }, [props.category]);

    const handlePagination = async (direction) => {
        const newPageNum = direction === 'next' ? pageNum + 1 : pageNum - 1;
        if (newPageNum >= 1 && newPageNum <= Math.ceil(totalResults / props.listOfArticles)) {
            setPageNum(newPageNum);
        }
    }

    return (
        <>
            <div className="container mx-auto mt-12 lg:px-5 md:px-5 max-sm:px-5">
                <h1 className="text-4xl font-semibold max-sm:text-[1.7rem]">Top News Headlines - <i>'{props.category.charAt(0).toUpperCase() + props.category.slice(1)}'</i></h1>
                <div className="my-10 flex justify-between">
                    <button disabled={pageNum <= 1} className="bg-blue-600 hover:bg-blue-400 text-white  font-medium py-2 px-4 rounded-l text-1xl" onClick={() => { handlePagination('previous') }}>
                        &#8592; Prev
                    </button>
                    <button disabled={pageNum + 1 > Math.ceil(totalResults / props.listOfArticles)} className="bg-green-500 hover:bg-green-400 text-white font-medium py-2 px-4 rounded-r text-1xl" id="nextBtn" onClick={() => { handlePagination('next') }}>
                        Next &#8594;
                    </button>
                </div>
                <div className="mt-8 grid grid-flow-row grid-cols-4 gap-y-10 gap-x-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center" id="news_card_container">
                    {
                        Array.isArray(newsData) && newsData.map((element) => {
                            return (
                                <div id="news_card" key={element.url}>
                                    <NewsItem
                                        author={element.author}
                                        title={element.title}
                                        description={element.description}
                                        urlToImage={element.urlToImage}
                                        newsUrl={element.url}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            )

                        })
                    }
                </div>
                <div className="my-10 flex justify-between">
                    <button disabled={pageNum <= 1} className="bg-blue-600 hover:bg-blue-400 text-white  font-medium py-2 px-4 rounded-l text-1xl" onClick={() => { handlePagination('previous') }}>
                        &#8592; Prev
                    </button>
                    {/* Scroll-To-Top */}
                    <div id="scrollTop" onClick={() => {
                        window.scrollTo({
                            top: '0',
                            behavior: 'smooth'
                        })
                    }}>
                        &#8593;
                    </div>
                    <button disabled={pageNum + 1 > Math.ceil(totalResults / props.listOfArticles)} className="bg-green-500 hover:bg-green-400 text-white font-medium py-2 px-4 rounded-l text-1xl" onClick={() => { handlePagination('next') }}>
                        Next &#8594;
                    </button>
                </div>
            </div>
        </>
    )
}

// Setting default props for the News component
News.defaultProps = {
    listOfArticles: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
}

// Defining prop types for the News component
News.propTypes = {
    country: PropTypes.string.isRequired,
}

export default News;