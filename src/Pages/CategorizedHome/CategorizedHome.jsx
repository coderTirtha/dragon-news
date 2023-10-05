import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from "../BreakingNews";
import { NavLink, useLoaderData } from "react-router-dom";
import News from "../../News/News";
import { useEffect, useState } from "react";

const CategorizedHome = () => {
    const news = useLoaderData();
    const [categorizedNews, setCategorizedNews] = useState(news);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const sortCategories = id => {
        const filteredNews = news.filter(aNews => aNews.category_id === id);
        setCategorizedNews(filteredNews);
    }
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <div className="menu bg-base-200 space-y-2 p-2">
                        <h2 className="text-gray-400 text-2xl font-bold px-3">All Categories</h2>
                        <div className="p-2">
                            {
                                categories?.map(category => <li onClick={() => sortCategories(category.id)} key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    {
                        categorizedNews.length > 0 ? 
                        categorizedNews.map(aNews => <News key={aNews._id} news={aNews}></News>) : 
                        <p className="text-gray-400 text-center">No news found.</p>
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default CategorizedHome;