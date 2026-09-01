function CourseList(props) {
    return (
            <div>
                <h2>Courses</h2>
                <ul>
                    {props.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        );
    }
export default CourseList;