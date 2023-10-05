import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="menu bg-base-200 space-y-2 p-2">
            <h2 className="text-gray-400 text-2xl font-bold px-3">All Categories</h2>
            <div className="p-2">
                {
                    categories.map(category => <li key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;