import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Small Business
                    </Typography>
                    {
                        props.isLoggedIn && 
                            <Button color="inherit"><Link to="/add">Add</Link></Button>
                    }
                    <Modal />
                    <Link to="/"><Button color="inherit">Listing</Button></Link>
                    {
                        props.isLoggedIn ? (
                                    <Link to='/login'><Button color="inherit" onClick={props.logout}>logout</Button></Link>
                        ) : (
                            <Link to="/login"><Button color="inherit">Login</Button></Link>
                        )
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}