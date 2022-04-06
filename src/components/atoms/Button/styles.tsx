import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IProps } from "./IProps";

export const StyledButton = styled(Button)<IProps>(({ theme, variant }) => ({
  minWidth: "170px",
  width: "auto",
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  fontWeight: theme.typography.fontWeightMedium,
  border:
    variant === "outlined" ? `2px solid ${theme.editButton.border}` : "none",

  boxShadow: variant === "contained" ? theme.customShadows[2] : "none",
  "&:hover": {
    boxShadow: variant === "contained" ? theme.customShadows[2] : "none",
  },
}));
