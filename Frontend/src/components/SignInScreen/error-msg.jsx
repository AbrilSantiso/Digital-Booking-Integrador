import { FaExclamationCircle } from "react-icons/fa";

function ErrorMsg(props) {
    const { content } = props;
    return (
        <div className="error-msg-content">
            <FaExclamationCircle className="warn-icon" />
            <p className="error-msg">{content}</p>
        </div>
    )
}

export default ErrorMsg;