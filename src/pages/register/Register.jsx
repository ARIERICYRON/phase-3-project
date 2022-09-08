import "./register.css"

export default function Register() {
  return (
      <div className="register">
        <pan className= "registerTitle">register</pan>
        <form className="registerForm">
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter Your email.."/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter Your password.."/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Register</button>
    </div>
  )
}
