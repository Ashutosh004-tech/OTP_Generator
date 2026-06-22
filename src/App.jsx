import { useState } from "react";
import "./App.css";
export default function App() {
  const [isGeterated, setGenerated] = useState(false);
  let generateOTP = (e) => {
    e.preventDefault();
    setGenerated(true);
    console.log(Math.floor(1000 + Math.random() * 9000));
  };

  let verifyOTP = (e) => {
     e.preventDefault();
    console.log("Verified ")
  };
  return (
    <div className="usersignUp">
      <h2>Enter your details</h2>
      <form action="" className="userForm">
        <div>
          <label htmlFor="userEmail"> Enter email id:</label>
          <input type="text" id="userEmail" />
        </div>

        <div>
          <label htmlFor="userOTP">Enter OTP:</label>
          <input type="text" id="userOTP" />
        </div>
        <div>
          {isGeterated ? <button onClick={verifyOTP}>Verify</button>: <button onClick={generateOTP}>Generate</button>}
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
