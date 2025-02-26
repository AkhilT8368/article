import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, label, ...props }) => {
  return (
    <Button {...props} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
