import Course from "./Course";

function CourseList() {
    return (
            <section>
                <br></br>
                <h2>Courses</h2>
                <ul>
                    <Course name="Mobile App Dev" />
                    <Course name="Software Engineering" />
                    <Course name="Database Systems" />
                    <Course name="Application Development" />
                </ul>
            </section>
        );
    }
export default CourseList;