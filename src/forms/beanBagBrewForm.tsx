import React, { useEffect } from "react";
import { useForm } from "react-hook-form"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button"

//* Placeholder for bean washing processes
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

export default function BeanBagBrewForm() {
	const classes = useStyles();
	const [process, setProcess] = React.useState("Process1");
	const [brewMethod, setBrewMethod] = React.useState("method1");
		
	//* Form Handling
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		console.log(JSON.stringify(data, null, 4));
	};
	
	useEffect(() => {
		register({ name: "beanProcess" });
	}, [register]);

	const changeProcess = (event: React.ChangeEvent<HTMLInputElement>) => {
			setProcess(event.target.value);
	};
    
	const changeBrewMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
			setBrewMethod(event.target.value);
	};

  return (
    <div className={classes.root}>
      <Box p={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/** The Bean */}
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={15}>
                <Typography className={classes.centered} variant="h4">The Bean</Typography>

                <TextField
                  name="beanName"
                  id="standard-basic-bean-name"
                  label="Bean Name"
                  inputRef={register}
                />
                <TextField name="beanRegion" id="standard-basic-bean-region" label="Region" inputRef={register} />
								<TextField
									name="beanElevation"
                  id="standard-basic-bean-elevation"
									label="Elevation"
									inputRef={register}
                />
                <TextField name="beanVariety" id="standard-basic-bean-variety" label="Variety" inputRef={register} />
                <TextField name="beanSoil" id="standard-basic-bean-soil" label="Soil" inputRef={register} />
								<TextField
									name="beanHarvestDate"
                  id="standard-basic-bean-harvest"
                  label="Harvest Date"
                  type="date"
									InputLabelProps={{ shrink: true }}
									inputRef={register}
								/>
								
								{/** TODO: Register this field */}
								<TextField
									name="beanProcess"
                  id="standard-basic-process-select"
                  select
                  label="Process"
                  value={process}
									onChange={changeProcess}
									inputRef={register}
                >
                  {processes.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
								</TextField>
								
								{/** TODO: Register this field */}
                <Typography id="discrete-slider">Roast Level</Typography>
								<Slider
									defaultValue={0}
									step={1}
									marks
									min={0}
									max={5}
								/>
              </Paper>
            </Grid>

            {/** The Bag */}
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper} elevation={15}>
                <Typography className={classes.centered} variant="h4">
                  The Bag
                </Typography>

								<TextField
									name="roasterName"
                  id="standard-basic-roaster-name"
									label="Roaster Name"
									inputRef={register}
                />
                <TextField name="roastName" id="standard-basic-roast-name" label="Roast Name" inputRef={register} />
								<TextField
									name="roastDate"
                  id="standard-basic-roast-date"
                  label="Roast Date"
                  type="date"
									InputLabelProps={{ shrink: true }}
									inputRef={register}
                />
								<TextField
									name="roasterNotes"
                  id="standard-basic-roaster-notes"
                  label="Roaster Notes"
                  multiline
                  rows={4}
									rowsMax={4}
									inputRef={register}
                />
              </Paper>
            </Grid>

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
					</Grid>
					<Button type="submit">Save</Button>
        </form>
      </Box>
    </div>
  );
}
