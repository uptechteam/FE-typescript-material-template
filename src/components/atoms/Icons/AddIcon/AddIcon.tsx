import * as React from "react";
import { SvgIconProps } from "@mui/material";
import { BaseIcon } from "../BaseIcon";

export const AddIcon: React.FC<SvgIconProps> = (props) => (
  <BaseIcon {...props}>
    <path d="M17 11H11V17H9V11H3V9H9V3H11V9H17V11Z" fill="#41479B" />
  </BaseIcon>
);
