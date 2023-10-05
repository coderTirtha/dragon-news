import { Link, useLocation } from "react-router-dom";

const News = ({ news }) => {
    const { _id, author, title, image_url, details } = news;
    return (
        <div>
            <div className="card bg-base-100 shadow-lg rounded-md">
                <div className="p-4 bg-base-200 rounded-t-md">
                    <div className="flex gap-4">
                        <img src={author.img} alt="" className="w-[50px] rounded-full" />
                        <div>
                            <h3 className="text-lg font-semibold">{author?.name ? author.name : "Anonymous"}</h3>
                            <p>{author?.published_date ? author.published_date : "A long day ago"}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt="Shoes" /></figure>
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