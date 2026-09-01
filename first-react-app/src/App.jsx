import { useState } from "react";
import StudentProfile from "./components/StudentProfile";
import ActivityCounter from "./components/ActivityCounter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseList from "./components/CourseList";
//import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (

    <div>
      <Header />

      <StudentProfile
      name="Isaiah Orville T. Aragon"
      program="BSIT"
      year="2nd Year"
      stdid="2001-020-33"
      />

      <br></br>

      <h2>Activities</h2>

      <ActivityCounter />

      <br></br>

      <CourseList 
        courses={
            ["Applications Development", 
              "Database Systems", 
              "Software Engineering", 
              "Web Development"
            ]
          } />

      <Footer />
    </div>
  );
}
export default App;