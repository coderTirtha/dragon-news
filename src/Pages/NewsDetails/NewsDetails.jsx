import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const specifiedNews = news.find(aNews => aNews._id === id);
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <div className="card bg-base-100 border-2 rounded-md">
                        <div className="card-body">
                            <figure><img src={specifiedNews.image_url} alt="news_image" /></figure>
                            <h2 className="card-title">{specifiedNews.title}</h2>
                            <p>{specifiedNews.details}</p>
                            <Link to={'/'}><button className="btn btn-outline">Go back to Home</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;