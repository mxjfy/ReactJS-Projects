// not found image
import Img from '../assets/img/not-found.jpg';

const NewsItem = (props) => {
    const notFoundImg = Img;
    const publishedDate = new Date(props.date).toUTCString()
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                <a href={props.newsUrl} target="_blank" >
                    <img className="rounded-t-lg news-thumbnail" src={!props.urlToImage ? notFoundImg : props.urlToImage} />
                </a>
                <div className="p-5">
                    <a href={props.newsUrl} target="_blank" >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{!props.title ? 'Title Not-Found' : props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{!props.description ? 'Description Not-Found' : props.description}</p>
                    <div className="space-y-0.5 font-medium dark:text-white text-left mb-3">
                        <div>Author: <span className='text-sm text-gray-500 dark:text-gray-400'> {!props.author ? 'Unknown' : props.author}</span></div>
                        <div>Published Date: <span className='text-sm text-gray-500 dark:text-gray-400'>{publishedDate}</span></div>
                        <div>Source: <span className='text-sm text-gray-500 dark:text-gray-400'>{props.source}</span></div>
                    </div>
                    <a href={props.newsUrl} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NewsItem
