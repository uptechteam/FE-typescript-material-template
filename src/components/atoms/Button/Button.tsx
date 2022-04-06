import * as React from "react";
import { IProps } from "./IProps";
import { StyledButton } from "./styles";

export const Button: React.FC<IProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
