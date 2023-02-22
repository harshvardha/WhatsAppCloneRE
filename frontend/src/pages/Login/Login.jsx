import { QR_CODE_IMAGE } from "../../contants/constants";
import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="login--nav"></div>
            <div className="login--instructions">
                <div className="instructions">
                    <p className="instructions--title">To use WhatsApp on your computer:</p>
                    <ol className="instruction--points">
                        <li className="instruction--point">
                            Open WhatsApp on your phone
                        </li>
                        <li className="instruction--point">
                            Tap Menu Settings on your phone and select WhatsApp Web
                        </li>
                        <li className="instruction--point">
                            Point your phone to this screen to capture the code
                        </li>
                    </ol>
                </div>
                <div className="qr">
                    <img src={QR_CODE_IMAGE} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;