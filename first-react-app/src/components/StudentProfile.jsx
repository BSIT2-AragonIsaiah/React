function StudentProfile(props) {
    return (
            <section>
                <br></br>
                <h2>{props.name}</h2>
                <p>{props.program}</p>
                <p>{props.year}</p>
                <p>{props.stdid}</p>
                <p>{props.status}</p>
            </section>
        );
    }
export default StudentProfile;