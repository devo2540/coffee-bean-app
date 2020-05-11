import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            background: '#000',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <ToolBar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            ></IconButton>

            <Typography variant="h6" className={classes.title}>
              Coffee Bean App
            </Typography>

            <Button color="inherit">Login</Button>
          </ToolBar>
        </AppBar>
      </div>
    );
}