import React from "react";
import Header from "@/Header";
import { Grid } from "@material-ui/core";

const headerTitle =
  "What are you getting into it? – Notes from a start-up founder: Immersion and concentration";

const Review: React.FC = () => {
  return (
    <Grid container direction="column">
      <Header title={headerTitle} />
    </Grid>
  );
};

export default Review;