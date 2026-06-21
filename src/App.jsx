import "./App.css";
export default function App() {
    
  return (
    <div className="usersignUp">
      <h2>Enter your details</h2>
      <form action="" className="userForm">
        <div>
          <label htmlFor="userName"> User name:</label>
          <input type="text" id="userName" />
        </div>
        <div>
          <label htmlFor="userEmail"> Enter email id:</label>
          <input type="text" id="userEmail" />
        </div>
        <div>
          <label htmlFor="userOTP">Enter OTP:</label>
          <input type="text" id="userOTP" />
          <button>Generate</button>
        </div>
        <div>
          <label htmlFor="userPassword">Enter Password:</label>
          <input type="text" id="userPassword" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
