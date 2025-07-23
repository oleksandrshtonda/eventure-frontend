import { type FC, type ReactNode } from "react";
import "./button.component.scss";

interface ButtonProps {
  callback: () => void;
  children: ReactNode;
  disabled?: boolean;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = ({
  callback,
  children,
  disabled = false,
  secondary = false,
}) => {
  const classNames = `button button--${secondary ? "secondary" : "primary"}`;

  return (
    <button className={classNames} onClick={callback} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
