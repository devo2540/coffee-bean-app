import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";

const processes = [
  {
    value: "Process1",
    label: "Process1"
  },
  {
    value: "Process2",
    label: "Process2"
  },
  {
    value: "Process3",
    label: "Process3"
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
        margin: '0 auto'
    }
  })
);

export default function TheBeanCard() {
    const classes = useStyles();
    const [process, setProcess] = React.useState("Process1");

     const changeProcess = (event: React.ChangeEvent<HTMLInputElement>) => {
       setProcess(event.target.value);
     };
    
    return (
      <Grid item xs={12} md={4}>
            <Paper className={classes.paper} elevation={15}>
          <Typography className={classes.centered} variant="h4">The Bean</Typography>

            <TextField id="standard-basic-bean-name" label="Bean Name" />
            <TextField id="standard-basic-bean-region" label="Region" />
            <TextField id="standard-basic-bean-elevation" label="Elevation" />
            <TextField id="standard-basic-bean-variety" label="Variety" />
            <TextField id="standard-basic-bean-soil" label="Soil" />
            <TextField
              id="standard-basic-bean-harvest"
              label="Harvest Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              id="standard-basic-process-select"
              select
              label="Process"
              value={process}
              onChange={changeProcess}
            >
              {processes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Typography id="discrete-slider">Roast Level</Typography>
            <Slider defaultValue={0} step={1} marks min={0} max={5} />
          
        </Paper>
      </Grid>
    );
}