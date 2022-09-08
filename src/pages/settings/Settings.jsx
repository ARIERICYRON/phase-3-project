import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form  className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGxpZmV8ZW58MHx8MHx8&w=1000&q=80" alt="" 
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="safak" />
          <label>Username</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Username</label>
          <input type="Password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
