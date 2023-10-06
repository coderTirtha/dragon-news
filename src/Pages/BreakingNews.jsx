import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-base-200 p-3 rounded">
            <p className="bg-secondary px-4 py-2 text-white rounded">Breaking News</p>
            <Marquee pauseOnHover={true} className="flex-1 font-semibold">
                <p className="text-red-400">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</p> || 
                <p className="text-blue-400">Joe Biden announces $3 billion in Ukraine weapons aid</p> ||
            </Marquee>
        </div>
    );
};

export default BreakingNews;