import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Dot = () => {
    return (
        <div className="dots">
            <FontAwesomeIcon className="dark" icon={faCircle} />
            <FontAwesomeIcon className="middle" icon={faCircle} />
            <FontAwesomeIcon className="light" icon={faCircle} />
        </div>
    );
};

export default Dot;