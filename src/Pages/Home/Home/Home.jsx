import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import TopSlider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;