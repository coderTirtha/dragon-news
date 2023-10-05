import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import LeftSideNav from './Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h1>News coming soon here</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;