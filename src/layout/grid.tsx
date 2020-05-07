import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import TheBeanCard from './input_cards/theBean'
import TheBagCard from './input_cards/theBag'
import TheBrewCard from './input_cards/theBrew'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      form: {
        width: '100%'
      }
    }),
);

export default function FullWidthGrid() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Box p={10}>
        <form>
          <Grid container spacing={3}>
            <TheBeanCard />
            <TheBagCard />
            <TheBrewCard />
          </Grid>
        </form>
      </Box>
    </div>
  );
}