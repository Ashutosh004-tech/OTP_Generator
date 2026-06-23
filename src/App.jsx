import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [isGeterated, setGenerated] = useState(false);
  const [otp, setOtp] = useState("");
  const [userOTP, setUserOtp] = useState("");

  let generateOTP = (e) => {
    e.preventDefault();
    setGenerated(true);
    let otplVal = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(otplVal);
    setOtp(otplVal);
  };
  useEffect(() => {}, [otp]);

  let verifyOTP = (e) => {
    e.preventDefault();
    if (userOTP === otp) {
      console.log("Verified");
    } else {
      console.log("Invalid");
    }
  };

  return (
    <div className="usersignUp">
      <h2>Enter your details</h2>
      <form acion="" className="userForm">
        <div>
          <label htmlFor="userEmail"> Enter email id:</label>
          <input type="text" id="userEmail" />
        </div>

        <div>
          <label htmlFor="userOTP">Enter OTP:</label>
          <input
            type="text"
            id="userOTP"
            value={userOTP}
            onChange={(e) => setUserOtp(e.target.value)}
          />
        </div>
        <div>
          {isGeterated ? (
            <button onClick={verifyOTP}>Verify</button>
          ) : (
            <button onClick={generateOTP}>Generate</button>
          )}
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
