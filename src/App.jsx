import "./App.css";
export default function App() {
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
          <button>Generate</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
