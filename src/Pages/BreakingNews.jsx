import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-base-200 p-3 rounded">
            <p className="bg-secondary px-4 py-2 text-white rounded">Breaking News</p>
            <Marquee pauseOnHover={true} className="flex-1 font-semibold">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;