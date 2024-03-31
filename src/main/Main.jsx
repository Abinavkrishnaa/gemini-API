import {assets} from '../assets/assets';
import './Main.css';
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>GEMINI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello Dev,</span></p>
                <p>HoW R U??</p>
            </div>
        </div>
    </div>
  )
}

export default Main