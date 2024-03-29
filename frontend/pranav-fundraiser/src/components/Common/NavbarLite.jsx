import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function NavbarLite() {

  const navigate=useNavigate();

  const [showDonationControls, setShowDonationControls] = React.useState(false);
  const [showExtraContent, setShowExtraContent] = React.useState(false);

  React.useEffect(() => {
    // check if url is / or /home
    if (window.location.pathname === "/") {
      setShowDonationControls(true);
      setShowExtraContent(true);
    } else {
      setShowDonationControls(false);
      setShowExtraContent(false);
    }
  }, [window.location.pathname])

  const handleCrossButton = (e) => {
    e.stopPropagation();
    setShowExtraContent(false);
  }


  return (
    <nav className="navbar">
      <div className="navbar-lite-container">
        <div className="logo" onClick={()=>navigate('home')} >
        <svg width="50px" height="50px" viewBox="0 0 50 50" > <path fill="#000" d="M19.433.162c5.99-.701 15.306.935 21.06 3.663 3.171 1.52 6.342 4.403 7.556 6.936 1.84 3.78 2.388 9.313 1.605 15.86C47.657 42.83 40.454 49.96 26.088 50 10.273 50.039.72 41.31.056 26.19c-.274-5.689.43-9.273 2.818-14.222C6.202 5.072 11.917 1.019 19.433.162Zm-5.912 18.905c-.515 0-1.366.665-2.552 1.996l-.158.18c-1.082 1.234-1.622 2.094-1.622 2.578 0 .158.078.237.234.237.53 0 1.14.5 1.827 1.498s1.319 2.005 1.897 3.019l.1.173c.527.899.923 1.348 1.188 1.348.5 0 1.046-.404 1.64-1.212a51.544 51.544 0 0 0 1.662-2.401c.515-.792.921-1.188 1.218-1.188.296 0 .445.68.445 2.044l-.047.76c0 .634.148 1.22.445 1.76.297.538.734.808 1.311.808.578 0 1.265-.476 2.061-1.427a188.13 188.13 0 0 0 2.342-2.852l.07-.085c.729-.894 1.26-1.341 1.593-1.341.323 0 .818.412 1.485 1.237l.28.352a24.314 24.314 0 0 0 2.474 2.618c1.015.935 1.936 1.402 2.764 1.402.827 0 1.71-.285 2.646-.855.343-.222.757-.531 1.241-.927.484-.396.859-.705 1.124-.927l.119-.1c.205-.177.45-.398.736-.663l.463-.433c.171-.16.304-.284.398-.369l.111-.1a.43.43 0 0 0 .164-.332c0-.254-.187-.38-.562-.38-.375 0-.828.095-1.358.285a4.834 4.834 0 0 1-1.64.285c-.562 0-1.272-.309-2.131-.927-.859-.618-1.57-1.307-2.131-2.068-1.53-1.997-2.623-2.995-3.279-2.995-.593 0-1.538.784-2.834 2.353-1.296 1.57-2.1 2.354-2.412 2.354-.187 0-.312-.246-.375-.737a36.097 36.097 0 0 1-.164-1.593 3.613 3.613 0 0 0-.515-1.593c-.296-.49-.75-.736-1.358-.736-.609 0-1.437.65-2.483 1.949l-.14.173c-.968 1.184-1.616 1.776-1.944 1.776-.322 0-.94-.726-1.855-2.179l-.308-.495c-.953-1.513-1.676-2.27-2.17-2.27Z"></path>  </svg>
        {showExtraContent&&<div className="logo-extra-content">
          Extra Screens
          <div className="cross-button" onClick={(e)=>handleCrossButton(e)} >
            &times;
          </div>
        </div>}
        </div>
        {!showDonationControls&&<div className="navbar-list">
        <span>
        (Extra Utilitarian Screens)
        </span>
        
        <Button className="navbar-button" variant='outlined' color='white' style={{
            color:'black',
            borderColor:'#c1c1c1'
          }} 
          onClick={()=>navigate('fundraiser/create')}
          >+ Fundraiser</Button>

<Button className="navbar-button" variant='contained' color='primary' style={{
          }}
          onClick={()=>navigate('login')}
          
          >Login</Button>
        </div>}
        {showDonationControls&&<div className="navbar-list">
          <Button className="navbar-button" variant='outlined' color='white' style={{
            color:'black',
            borderColor:'#c1c1c1'
          }} >Share</Button>
          <Button className="navbar-button" variant='outlined' color='white' style={{
            color:'black',
            borderColor:'#c1c1c1'
          }}  >Donate</Button>
        </div>}
      </div>
    </nav>
  );
}

export default NavbarLite;