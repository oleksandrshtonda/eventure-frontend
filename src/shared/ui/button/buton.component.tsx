import { type FC, type ReactNode } from "react";
import "./button.component.scss";

interface ButtonProps {
  callback: () => void;
  children: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ callback, children, disabled = false }) => {
  return (
    <button onClick={callback} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
