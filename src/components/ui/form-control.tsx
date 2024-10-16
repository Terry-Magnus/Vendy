import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons for show/hide

type FormControlProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: "filled" | "outline";
  isRequired?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  subtext?: string;
};

const FormControl = ({
  label,
  variant = "filled",
  isRequired = false,
  className = "",
  type = "text",
  error = false,
  icon,
  iconPosition = "left", // Default icon position to left
  ...props // Spread the rest of the props to the input element
}: FormControlProps) => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const baseStyle = "w-full px-4 py-2 rounded focus:outline-none";
  const styles = {
    filled: `${baseStyle} bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500`,
    outline: `${baseStyle} border-2 border-gray-400 focus:border-blue-500`,
  };

  const inputWrapperStyle =
    icon || iconPosition ? "relative flex items-center" : ""; // Only apply styles if icon exists

  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 mb-1">{label}</label>}
      <div className={inputWrapperStyle}>
        {icon && iconPosition === "left" && (
          <span className="absolute left-3 text-gray-400">{icon}</span>
        )}
        <input
          type={type === "password" && !showPassword ? "password" : "text"} // Toggle password visibility
          className={`${styles[variant]} ${className} ${
            error ? "border-red-700" : ""
          }`}
          autoComplete="off"
          required={isRequired}
          {...props} // Spread the props to the input element
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle show/hide state
            className="absolute right-3 focus:outline-none"
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-400" />
            ) : (
              <FaEye className="text-gray-400" />
            )}
          </button>
        )}
        {icon && iconPosition === "right" && (
          <span className="absolute right-3 text-gray-400">{icon}</span>
        )}
      </div>
      {props.subtext && <span className="text-xs">{props.subtext}</span>}
    </div>
  );
};

export default FormControl;
