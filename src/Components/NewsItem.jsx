import NewsImage from '../assets/News.jpeg';

const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-3 px-2 py-2" style={{maxWidth:"425px"}}>
            
            <img src={src?src:NewsImage} style={{height:"200px",width:"400px"}} className="card-img-top" alt="News Image"/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):""}</p>
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
        </div>
      )
    }

export default NewsItem