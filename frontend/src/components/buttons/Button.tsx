import './Button.css'
import { ButtonProps } from "../../interfaces/Button";

const Button: React.FC<ButtonProps> = ({ text, className }) => {
    return (
        <button className={`default-button ${className}`}>
            {text}
        </button>
    );
};
  
export default Button;