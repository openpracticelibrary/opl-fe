import React from "react";
import Link from "@material-ui/core/Link";
import { YoutubeIcon, EmailIcon, PodIcon, InstaIcon, GitIcon } from "../../../assets/icons";
import Grid from "@material-ui/core/Grid";

const sections = [
  { url: "mailto:info@openpracticelibrary.com", icon: <EmailIcon /> },
  { url: "https://podcasts.apple.com/us/podcast/open-practice-podcast/id1501715186", icon: <PodIcon /> },
  { url: "https://www.instagram.com/openpracticelibrary/?hl=en", icon: <InstaIcon /> },
  { url: "https://github.com/openpracticelibrary", icon: <GitIcon /> },
  { url: "https://www.youtube.com/channel/UCBGbB7xVsmf-yQ8NXn7TOVg?view_as=subscriber", icon: <YoutubeIcon /> },
];

export default function FooterIconSection(props) {
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        alignItems="center"
      >
        {sections.map((section, i) => (
          <Grid item key={i}>
            <Link href={section.url} target="_blank">
              {section.icon}
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
