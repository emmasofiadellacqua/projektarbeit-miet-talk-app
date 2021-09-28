import { EditingState } from '@devexpress/dx-react-scheduler';
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  DateNavigator 
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import "./Scheduler.css"

const styles = theme => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
      },
      text: {
        padding: '0.5em',
        textAlign: 'center',
      },
      appointment: {
        borderRadius: '10px',
          backgroundColor: "#F99746",
        },
      apptContent: {
        '&>div>div': {
          whiteSpace: 'normal !important',
          lineHeight: 1.2,
        },
      },
      tooltipContent: {
        padding: theme.spacing(3, 1),
        paddingTop: 0,
        backgroundColor: "#F99746",
        boxSizing: 'border-box',
        width: '400px',
      },
      tooltipText: {
        ...theme.typography.body2,
        display: 'inline-block',
        },
      title: {
        ...theme.typography.h6,
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightBold,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      icon: {
        color: "#F99746",
        verticalAlign: 'middle',
      },
      circle: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        verticalAlign: 'super',
      },
      textCenter: {
        textAlign: 'center',
      },
      dateAndTitle: {
        lineHeight: 1.1,
      },
      titleContainer: {
        paddingBottom: theme.spacing(2),
      },
      container: {
        paddingBottom: theme.spacing(1.5),
      },
    });


const appointments = [
    {
      id: 0,
      title: 'Gelber Sack',
      startDate: new Date(2021, 8, 22, 10, 30),
      endDate: new Date(2021, 8, 22, 11, 30),
      ownerId: 1,
    }, {
      id: 1,
      title: 'Bio Müll',
      startDate: new Date(2021, 8, 25, 19, 30),
      endDate: new Date(2021, 8, 25, 21, 30),
      ownerId: 1,
    }, {
      id: 2,
      title: 'Gaszähler ablesen',
      startDate: new Date(2021, 8, 30, 7, 0),
      endDate: new Date(2021, 8, 30, 7, 10),
      ownerId: 2,
    }, {
        id: 3,
        title: 'Treppenhausreinigung',
        startDate: new Date(2021, 8, 5, 7, 0),
        endDate: new Date(2021, 8, 5, 18, 0),
        ownerId: 2,
      }, {
        id: 4,
        title: 'Bio Müll',
        startDate: new Date(2021, 8, 12, 8, 30),
        endDate: new Date(2021, 8, 12, 11, 30),
        ownerId: 1,
      }, {
        id: 5,
        title: 'Heizungswartung',
        startDate: new Date(2021, 8, 3, 12, 0),
        endDate: new Date(2021, 8, 3, 13, 0),
        ownerId: 2,
      }, {
        id: 6,
        title: 'Papier',
        startDate: new Date(2021, 8, 17, 7, 0),
        endDate: new Date(2021, 8, 17, 9, 0),
        ownerId: 2,
      }
      , {
        id: 7,
        title: 'Gelber Sack',
        startDate: new Date(2021, 8, 3, 7, 0),
        endDate: new Date(2021, 8, 3, 9, 0),
        ownerId: 2,
      }];
   
    const Appointment = withStyles(styles, { name: 'Appointment' })(({ classes, ...restProps }) => (
      <Appointments.Appointment
        {...restProps}
        className={classes.appointment}
      />
    ));
    
    const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({ classes, ...restProps }) => (
      <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
    ));

export default class Calendar extends React.PureComponent {
    // #FOLD_BLOCK
    constructor(props) {
      super(props);
  
      this.state = {
        data: appointments,
      };}
      
/* Attempted editing feature...
      this.commitChanges = this.commitChanges.bind(this);
    }
    

 commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });} */

    render() {
    const { data } = this.state;
    return (
    <div className="Wrapper">
    <div className="calendar_h"><h1 className="h1_calendar">Deine Termine</h1></div>
    <Paper>
    <Scheduler
      data={data}
    >
      <ViewState
      />
 
   <EditingState
       onCommitChanges={this.commitChanges}
     />
      <MonthView 
        />
      <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
    <AppointmentTooltip
            showCloseButton
          />
        <Toolbar/>
        <DateNavigator />
    </Scheduler>
  </Paper>
  <Navbar></Navbar>
  </div>
    );
}};

