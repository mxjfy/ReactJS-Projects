import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useState } from "react";


const App = () => {
  const apiKey = import.meta.env.VITE_REACT_NEWS_API;
  const pageSize = '16';
  const cn = 'us';
  const [progress, setProgress] = useState(0); // top loading bar
  return (
    <>
    <BrowserRouter>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
    />
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='general'/>}/>
      <Route exact path="/general" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='general'/>}/>
      <Route exact path="/business" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='business'/>} />
      <Route exact path="/entertainment" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='entertainment'/>}/>
      <Route exact path="/health" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='health'/>}/>
      <Route exact path="/science" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='science'/>}/>
      <Route exact path="/sports" element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='sports'/>}/>
      <Route exact path="/technology"element={<News progress={setProgress}  apiKey={apiKey} listOfArticles={pageSize} country={cn} category='technology'/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
