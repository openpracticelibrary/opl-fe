import React from 'react';
import {
  Box,
  Typography
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import VideoPlayer from "./VideoPlayer";
import { WebLinkIcon } from "../../assets/icons";


const ProcessModel = (props) => {
  return (
    <Box
      data-testid="pageGrid"
      width={1}
    >
      <Typography
        gutterBottom
        variant={"h1"}
        data-testid="processModel"
      >
        Our process model
      </Typography>
      <Typography
        gutterBottom
        variant={"body1"}
      >
        The 2020 pandemic led to forming a small Global remote product team for improving the library and delivering upon the growth strategy. This cross-functional group included product management, product design, and engineering to bring a balanced approach for continuous discovery and continuous delivery.
      </Typography>
      <Box my={2}>
        <VideoPlayer videoUrl="https://www.youtube.com/embed/N4mBIZg8MnQ" />
      </Box>
      <Box my={2}>
        <Link
          href="https://mobiusloop.com/"
        
        >
          <WebLinkIcon/> Learn more on mobiusloop.com
        </Link>
      </Box>
      <Typography variant={"body1"}>
        The Open Practice Library utilizes the sections of this process model for tagging and organizing practices within the application. 
      </Typography> 
    </Box>
  )
};

export default ProcessModel;
