import React from "react";
import { useTheme } from "@material-ui/styles";
import OplTextField from "../../shared/components/OplTextField";

const TitleEditor = (props) => {
  const theme = useTheme();

  const { palette: { grey }, typography: { h3, subtitle1 } } = theme;

  return (
    <OplTextField
      variant="outlined"
      width={ props.fullWidth ? "100%" : "inherit" }
      multiline={props.multiline}
      bg={grey[100]}
      shadow="inset 0 1px 3px 0 rgba(16,16,16,0.26)"
      rounded={6.5}
      typography={props.subtitle ? subtitle1 : h3}
      defaultValue={props.value}
      onChange={props.dispatch}
    />
  )
};

export default TitleEditor;
