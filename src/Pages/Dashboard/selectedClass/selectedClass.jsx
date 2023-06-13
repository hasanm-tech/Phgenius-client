
import useClasses from './../../../Hooks/useClasses';

const SelectedClass = () => {
    const [classes] = useClasses()
    console.log(classes)
    return (
        <div>
            <h2>{classes?.length}</h2>
        </div>
    );
};

export default SelectedClass;