import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <pan className= "loginTitle">Login</pan>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter Your email.."/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your password.."/>
            <button className="LoginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}
