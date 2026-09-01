function StudentProfile(props) {
    return (
            <div>
                <h2>{props.name}</h2>
                <p>{props.program}</p>
                <p>{props.year}</p>
                <p>{props.stdid}</p>
            </div>
        );
    }
export default StudentProfile;