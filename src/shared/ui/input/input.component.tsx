import type { Dispatch, FC, SetStateAction, SVGProps } from "react";
import "./input.component.scss";

type IconType = FC<SVGProps<SVGSVGElement>>;

interface InputProps {
  setter: Dispatch<SetStateAction<string>>;
  value: string;
  children: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  LeftIcon?: IconType;
  RightIcon?: IconType;
  paintIcons?: boolean;
}

// TODO: if only 1 right icon it moves to the left side - bug
const Input: FC<InputProps> = ({
  setter,
  value,
  children,
  label,
  disabled = false,
  error = "",
  LeftIcon,
  RightIcon,
  paintIcons = true,
}) => {
  return (
    <div className={`input-field ${label ? "input-field--has-label" : ""}`}>
      {label && <label>{label}</label>}
      {LeftIcon && <LeftIcon className="input__left-icon" />}

      <input
        onChange={(e) => setter(e.target.value)}
        className={`input ${LeftIcon ? "input--has-left-icon" : ""}`}
        value={value}
        placeholder={children}
        disabled={disabled}
      />

      {RightIcon && <RightIcon className="input__right-icon" />}
    </div>
  );
};

export default Input;
