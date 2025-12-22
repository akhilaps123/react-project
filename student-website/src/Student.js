import React from 'react';
import {useParams,Link} from 'react-router-dom';
function Student(){
    const {name} = useParams();
     return (
    <div>
      <h2>Welcome, {name}!</h2>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}
export default Student;