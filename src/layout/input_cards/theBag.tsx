import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      "& > *": {
        margin: theme.spacing(1),
        width: "70%"
      }
    },
    centered: {
      margin: "0 auto"
    }
  })
);

export default function TheBagCard() {
    const classes = useStyles();

    return (
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper} elevation={15}>
          <Typography className={classes.centered} variant="h4">The Bag</Typography>

          <TextField id="standard-basic-roaster-name" label="Roaster Name" />
          <TextField id="standard-basic-roast-name" label="Roast Name" />
          <TextField
            id="standard-basic-roast-date"
            label="Roast Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="standard-basic-roaster-notes"
            label="Roaster Notes"
            multiline
            rows={4}
            rowsMax={4}
          />
        </Paper>
      </Grid>
    );
}