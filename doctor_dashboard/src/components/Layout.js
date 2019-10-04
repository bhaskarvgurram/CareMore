import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DateFnsUtils from '@date-io/date-fns';
import List from '@material-ui/core/List';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button'
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Modal from '@material-ui/core/Modal'
import MenuIcon from '@material-ui/icons/Menu';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CardHeader from '@material-ui/core/CardHeader';
import moment from 'moment'
import OpacityIcon from '@material-ui/icons/Opacity';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [taskName, setTaskName] = React.useState("");
  const [tasks, setTasks] = React.useState([
    {
      name: 'Take Paracetamol',
      // time: '8:00 AM'
    },
    {
      name: 'Check Blood Sugar',
      // time: '10:00 AM'
    }
  ]);
  const [selectedTime, setSeletedTime] = React.useState();
  const [modalStyle] = React.useState(getModalStyle);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const data = [
    {
      name: 'John Doe',
      image: 'https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg'
    },
    {
      name: 'Hrishi Waikar',
      image: 'https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg'
    },
    {
      name: 'Rohit',
      image: 'https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg'
    },
    {
      name: 'Rakesh',
      image: 'https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg'
    },
    {
      name: 'Atul',
      image: 'https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg'
    },
    {
      name: 'Joh',
      image: 'https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg'
    },
  ]

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem><h1>PATIENTS</h1></ListItem>
      <List>
        {data.map(({ name, image }, index) => (
          <>
            <Divider />
            <ListItem button key={name}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={image} />
              </ListItemAvatar>
              <ListItemText primary={name} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>


    </div>
  );
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Doctor Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item md={12}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src='https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361832020-NCX1G5AMK0VRQAA09CDL/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/ismael-seck-quebec-solidaire-2018-montreal-portrait-professionnel-corporatif-studio.jpg' />
              </ListItemAvatar>
              <ListItemText primary="John Doe" />
            </ListItem>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardHeader
                title="Health Plan"
                action={
                  <Button aria-label="settings" onClick={handleOpen}>
                    <DateRangeIcon /> Add Task
                    </Button>
                }
              />
              <Divider />
              <CardContent>
                <List component="nav" aria-label="main mailbox folders">
                  {
                    tasks.map(({ name, time }) => (
                      <ListItem button>
                        <ListItemIcon>
                          <LocalHospitalIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                              {name}
                            </div>
                            <div>
                              {moment(time).format('LT')}
                            </div>
                          </div>
                        </ListItemText>
                      </ListItem>
                    ))
                  }

                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardHeader
                title="Weekly Report"
              />
              <Divider />
              <CardContent>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Blood Pressure
                        </div>
                        <div>
                          Normal
                        </div>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Blood Sugar Levels
                        </div>
                        <div>
                          Low
                        </div>
                      </div>
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardHeader
                title="Issues"
              />
              <Divider />
              <CardContent>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Throat Infection
                        </div>
                        <div>
                        </div>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Thyroid
                        </div>
                        <div>

                        </div>
                      </div>
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardHeader
                title="Medical History"
              />
              <Divider />
              <CardContent>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Thyroid Test Report
                        </div>
                        <div>
                        </div>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <OpacityIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          Thyroid
                        </div>
                        <div>

                        </div>
                      </div>
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalOpen}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <TextField
            style={{width:'220px'}}
              id="standard-name"
              label="Task"
              // className={classes.textField}
              value={taskName}
              onChange={(e) => {
                console.log(e.target.value)
                setTaskName(e.target.value)
              }}
              margin="normal"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                disableToolbar
                variant="inline"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedTime}
                onChange={(d) => {
                  console.log(d)
                  setSeletedTime(d)
                }}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <br />
            <br />
            <Button  style={{display:'flex',marginLeft: 'auto'}} variant="outlined" color="primary" onClick={() => {
              let updatedTasks = tasks
              updatedTasks.push({
                time: selectedTime,
                name: taskName
              })
              setTasks(updatedTasks)
              setModalOpen(false)
            }}>
              Add Task
                </Button>
          </div>
        </Modal>

      </main>
    </div>
  );
}


export default Layout;
