import React from "react";
import { useForm } from "react-hook-form";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import API, { MUTATION_NEW_BREW } from '../api/index'

//* Placeholder for brewing methods
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

//* Define styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    form: {
      width: "100%"
    },
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

export default function BrewForm() {
    const classes = useStyles();
    const [brewMethod, setBrewMethod] = React.useState("method1");

    //* Form Handling
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 4));
    API.post(MUTATION_NEW_BREW, data)
     .then(data => data)
    };
    
    const changeBrewMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrewMethod(event.target.value);
    };
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}> 
        {/** The Brew */}
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={15}>
            <Typography className={classes.centered} variant="h4">
              The Brew
            </Typography>

            <TextField
              name="brewDate"
              id="standard-basic-brew-date"
              label="Brew Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              inputRef={register}
            />

            {/** TODO: Register this field */}
            <TextField
              name="brewMethod"
              id="standard-basic-brew-method-select"
              select
              label="Brew Method"
              value={brewMethod}
              onChange={changeBrewMethod}
              inputRef={register}
            >
              {brewMethods.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="brewBeanWeight"
              id="standard-basic-bean-weight"
              label="Bean Weight"
              inputRef={register}
            />
            <TextField
              name="brewWaterWeight"
              id="standard-basic-water-weight"
              label="Water Weight"
              inputRef={register}
            />
            <TextField
              name="brewFlavorProfile"
              id="standard-basic-flavor-profile"
              label="Flavor Profile"
              multiline
              rows={4}
              rowsMax={4}
              inputRef={register}
            />
          </Paper>
        </Grid>
      </form>
    );
}