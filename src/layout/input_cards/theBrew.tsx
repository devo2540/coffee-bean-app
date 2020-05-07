import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const brewMethods = [
  {
    value: "method1",
    label: "method1"
  },
  {
    value: "method2",
    label: "method2"
  },
  {
    value: "method3",
    label: "method3"
  }
];

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

export default function TheBrewCard() {
    const classes = useStyles();
    const [brewMethod, setBrewMethod] = React.useState("method1");

    const changeBrewMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBrewMethod(event.target.value);
    };
    
    return (
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper} elevation={15} >
          <Typography className={classes.centered} variant="h4">The Brew</Typography>
          
            <TextField
              id="standard-basic-brew-date"
              label="Brew Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              id="standard-basic-brew-method-select"
              select
              label="Brew Method"
              value={brewMethod}
              onChange={changeBrewMethod}
            >
              {brewMethods.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="standard-basic-bean-weight" label="Bean Weight" />
            <TextField id="standard-basic-water-weight" label="Water Weight" />
            <TextField
              id="standard-basic-flavor-profile"
              label="Flavor Profile"
              multiline
              rows={4}
              rowsMax={4}
                />
                
        </Paper>
      </Grid>
    );
}