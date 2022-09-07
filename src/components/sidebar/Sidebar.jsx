import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://thumbs.dreamstime.com/b/programmer-working-programming-code-computer-screen-dark-room-programmer-working-programming-code-computer-100269668.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati repellat, laboriosam similique itaque in quia ut eos at delectus praesentium dolor distinctio, suscipit recusandae neque ani</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
      <i className="sidebarIcon fa-brands fa-facebook"></i>
      <i className="sidebarIcon fa-brands fa-twitter"></i>
      <i className="sidebarIcon fa-brands fa-pinterest"></i>
      <i className="sidebarIcon fa-brands fa-instagram"></i>
      </div>
      </div>
    </div>
  );
}
