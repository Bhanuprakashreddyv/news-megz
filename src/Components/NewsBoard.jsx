import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";



const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    },[category])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.length > 0 ? (articles.map((news,index)=> (
             <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))) : (
            <p>Loading news....</p>
        )}
    
    </div>
  )
}

export default NewsBoard