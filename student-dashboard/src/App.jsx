import { useState } from "react";
import StudentProfile from "./components/StudentProfile";
import ActivityCounter from "./components/ActivityCounter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseList from "./components/CourseList";
import Announcement from "./components/Announcement";

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
      status="Active"
      />

      <CourseList />
      <ActivityCounter />

      <Announcement
      content="Midterm examination will be held next week."
      />
      
      <Footer />
    </div>
  );
}

export default App;