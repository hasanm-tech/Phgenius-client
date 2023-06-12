import Discover from "../Discover/Discover";
import Instructors from "../Instructors/Instructors";
import Partners from "../Partnars/Partnars";
import PopularClasses from "../PopularClasses/PopularClasses";
import TopSlider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <Discover></Discover>
            <Instructors></Instructors>
            <Partners></Partners>

        </div>
    );
};

export default Home;