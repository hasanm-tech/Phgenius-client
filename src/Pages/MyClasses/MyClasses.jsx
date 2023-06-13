import useAddClasses from "../../Hooks/useAddClasses";


const MyClasses = () => {
    const [addClasses] = useAddClasses()
    return (
        <div>
            <h2>{addClasses?.length}</h2>
        </div>
    );
};

export default MyClasses;