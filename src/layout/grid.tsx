import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from '@material-ui/core/Slider'

const processes = [
  {
    value: 'Process1',
    label: 'Process1'
  },
  {
    value: 'Process2',
    label: 'Process2'
  },
  {
    value: 'Process3',
    label: 'Process3'
  },
]

const brewMethods = [
  {
    value: 'method1',
    label: 'method1'
  },
  {
    value: 'method2',
    label: 'method2'
  },
  {
    value: 'method3',
    label: 'method3'
  },
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          flexGrow: 1,
          paddingTop: '2rem'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
      },
      form: {
        '& > *': {
          margin: theme.spacing(1),
          width: '70%',
        }
      },
    }),
);

export default function FullWidthGrid() {
  const classes = useStyles();
  const [process, setProcess] = React.useState('Process1');
  const [brewMethod, setBrewMethod] = React.useState('method1')

  const changeProcess = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProcess(event.target.value);
  }

  const changeBrewMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrewMethod(event.target.value)
  }

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h4">The Bean</Typography>
              <form className={classes.form}>
                <TextField id="standard-basic-bean-name" label="Bean Name" />
                <TextField id="standard-basic-bean-region" label="Region" />
                <TextField
                  id="standard-basic-bean-elevation"
                  label="Elevation"
                />
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
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h4">The Bag</Typography>
              <form className={classes.form}>
                <TextField
                  id="standard-basic-roaster-name"
                  label="Roaster Name"
                />
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
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h4">The Brew</Typography>
              {/* TODO: Brew Date, Brew Method, Weight Beans, Weight Water, Flavor Profile, Star Rating */}
              <form className={classes.form}>
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
                <TextField
                  id="standard-basic-bean-weight"
                  label="Bean Weight"
                />
                <TextField
                  id="standard-basic-water-weight"
                  label="Water Weight"
                />
                <TextField
                  id="standard-basic-flavor-profile"
                  label="Flavor Profile"
                  multiline
                  rows={4}
                  rowsMax={4}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}