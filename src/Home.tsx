import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { navigate, CREATE_BEAN_BAG } from './routes/actions'
import BeanBagBrewForm from './forms/beanBagForm';


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    centered: {
      textAlign: 'center',
      margin: '0 auto'
    }
  })    
)

export default function Homepage() {
  const classes = useStyles();

  return (
    <Box pt={5}>
      <Grid container xs={12} className={classes.centered}>
        <Grid item className={classes.centered}>
          <Typography variant="body1" gutterBottom>
            You haven't added any beans yet!
          </Typography>

          <Button
            color="primary"
            variant="contained"
            href={CREATE_BEAN_BAG}
          >
            Add a Bean
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}