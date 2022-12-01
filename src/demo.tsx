import * as React from "react";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";

function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

function MyComponent() {
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <div>
      <div>{`theme.breakpoints.up('xs') matches: ${xs}`}</div>
      <div>{`theme.breakpoints.up('sm') matches: ${sm}`}</div>
      <div>{`theme.breakpoints.up('md') matches: ${md}`}</div>
      <div>{`theme.breakpoints.up('lg') matches: ${lg}`}</div>
      <div>{`theme.breakpoints.up('xl') matches: ${xl}`}</div>
    </div>
  );
}

const Demo = () => {
  return (
    <>
      <div>
        <SimpleMediaQuery />
      </div>
      <div>
        <MyComponent />
      </div>
    </>
  );
};

export { Demo, MyComponent, SimpleMediaQuery };
