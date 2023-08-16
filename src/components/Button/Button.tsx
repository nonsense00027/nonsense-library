import React, { FC } from "react";

interface IButtonProps {
  label?: string;
}

const Button: FC<IButtonProps> = ({ label = "Nonsense Button" }) => {
  return <button>{label}</button>;
};

export default Button;
