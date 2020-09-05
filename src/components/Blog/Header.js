import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkStyle from '@material-ui/core/Link';
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {unsetUser} from '../../store/action'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function HeaderContent(props) {
  const dispatch = useDispatch()
  const history = useHistory()

  if(props.userData !== undefined){
    return(
      <div>
      <span style={{marginRight: "10px"}}>
        Hello, {props.userData.username}
      </span>
        <Button variant="outlined" size="small" onClick={()=>{
          dispatch(unsetUser())
          history.push('/login')
        }}>
          Log out
        </Button>
      </div>
    )
  }else{
    return(
      <Link to="/login">
        <Button variant="outlined" size="small">
          Login / Sign up
        </Button>
      </Link>
    )
  }
}

export default function Header(props) {
  const classes = useStyles();
  const { sections, title, userData } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      <HeaderContent userData={userData} />
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <LinkStyle
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </LinkStyle>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};