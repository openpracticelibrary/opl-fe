import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { OPLLogo } from "../../../assets/icons";
import logoLabs from "../../../assets/images/logo-red-hat-open-innovation-labs-a-standard-rgb.png";

export default function FooterLogoSection() {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <OPLLogo height="37px" width="221px" />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={5}>
              <Typography variant="overline" data-testid="poweredBy">
                {`powered by`}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <img
                src={logoLabs}
                alt="Open Innovation Labs Logo"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
