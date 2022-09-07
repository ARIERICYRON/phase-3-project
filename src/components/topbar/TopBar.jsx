import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img 
        className="topImg"
        src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" alt="Profile" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
