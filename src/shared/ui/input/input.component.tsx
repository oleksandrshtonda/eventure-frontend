import type {
  Dispatch,
  FC,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";
import "./input.component.scss";

interface InputProps {
  setter: Dispatch<SetStateAction<string>>;
  value: string;
  children: HTMLInputTypeAttribute;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  setter,
  value,
  children,
  disabled = false,
}) => {
  return (
    <input
      onChange={(e) => setter(e.target.value)}
      value={value}
      placeholder={children}
      disabled={disabled}
    />
  );
};

export default Input;
