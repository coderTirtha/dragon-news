import { Link } from "react-router-dom";

const News = ({ news }) => {
    const { _id, title, image_url, details } = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-lg rounded-md">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 300 ? 
                        <p>{details.slice(0, 200)}...<br /><Link className="text-orange-500 font-bold" to={`/news/${_id}`}>Read more</Link></p> :
                        <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default News;