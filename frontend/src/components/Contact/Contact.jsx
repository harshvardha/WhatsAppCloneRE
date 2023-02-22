import { EMPTY_PROFILE_PICTURE } from "../../contants/constants";
import "./Contact.css";

const Contact = ({ num }) => {
    return (
        <div className="contact">
            <img src={EMPTY_PROFILE_PICTURE} alt="" />
            <p>Harshvardhan Singh {num}</p>
        </div>
    )
}

export default Contact;