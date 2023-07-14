import './Signav.css'
import User from './user.png'
import Login from "./Login";
import Register from "./Register";
import Te from './Te';
import {useLocation,useNavigate} from "react-router-dom";
function Signav(){
  const location=useLocation()
    return(
 
        <div className="menu-bar">
      <h1 className="logo"> Trans<span>Azione</span></h1>
      <ul>
        <li><a href="./Te">Home</a></li>
        <li><a href="#">About</a></li>
        {/*<li><a href="#">Pages <i className="fas fa-caret-down"></i></a>
            <div className="dropdown-menu">
                <ul>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li>
                    <a href="#">Team <i className="fas fa-caret-right"></i></a>
                    
                    <div className="dropdown-menu-1">
                      <ul>
                        <li><a href="#">Team-1</a></li>
                        <li><a href="#">Team-2</a></li>
                        <li><a href="#">Team-3</a></li>
                        <li><a href="#">Team-4</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
    </li>*/}
        <li><a href="#">Blog</a>
        </li>
        <li><a href="#">Connect</a></li>
        <li>
        <div className="dropdown">
        <img src={User} className="use" />  
  <button className="s"></button>
  <div className="dropdown-content">
    <a id='dr' href="" >{location.state.id}</a>
    
    
  </div>
</div>
            </li>
        
      </ul>
    </div>
         
 );
    }

    
export default Signav;