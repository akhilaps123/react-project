import React from "react";
import { Link,useNavigate} from "react-router-dom";
function Home() {
  const students = ["Alexai", "Rahul", "Sneha", "Riya"];
  const navigate = useNavigate();

  const goToRiya = () => {
  navigate("/student/Riya");
};
return(
    <div className="container">
        <h2>Student List</h2>
        <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Link to={`/student/${student}`}>{student}</Link>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={goToRiya}>
        Go to Default Student (Riya)
      </button>
    </div>
);
}
export default Home;