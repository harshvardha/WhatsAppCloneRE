import { EMPTY_PROFILE_PICTURE } from "../../contants/constants";
import "./Contact.css";

const Contact = ({ num }) => {
    return (
        <div className="contact">
            <div className="contact--user">
                <img src={EMPTY_PROFILE_PICTURE} alt="" />
                <p>Harshvardhan Singh {num}</p>
            </div>
            <span>4:17 P.M</span>
        </div>
    )
}

export default Contact;