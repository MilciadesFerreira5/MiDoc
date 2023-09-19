import { Button } from "@mui/material";
const ButtonComponent = ({
  children,
  color = "primary",
  variant = "contained",
  type = "button",
  startIcon,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      type={type}
      startIcon={startIcon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
