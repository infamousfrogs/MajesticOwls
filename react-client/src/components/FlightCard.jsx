import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Avatar from 'material-ui/Avatar';
import Arrow from 'material-ui/svg-icons/navigation/arrow-forward';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'

import {
  grey500, white, teal500,
} from 'material-ui/styles/colors';



 class FlightCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      returnFlight: false
    }
    this.changeToReturnFlight = this.changeToReturnFlight.bind(this);
    this.changeToDepartureFlight = this.changeToDepartureFlight.bind(this);

  }

  changeToReturnFlight () {
    this.setState({returnFlight: true})
  }

  changeToDepartureFlight() {
    this.setState({returnFlight: false})
  }

  linkToCheckIn() {

  }

  render() {
    const airlineCheckInUrls = {
      "Alaska Airlines": 'https://webselfservice.alaskaair.com/checkinweb/default.aspx',
      "American Airlines": 'https://www.aa.com/reservation/flightCheckInViewReservationsAccess.do',
      "Delta Air Lines": 'https://www.delta.com/PCCOciWeb/findBy.action',
      "Frontier Airlines": 'https://www.flyfrontier.com/manage-travel/online-check-in/',
      "JetBlue Airways": 'https://book.jetblue.com/B6.myb/checkIn.html#/',
      "Southwest Airlines": 'https://www.southwest.com/flight/retrieveCheckinDoc.html',
      "Spirit Airlines": 'https://www.spirit.com/Default.aspx',
      "United Airlines": 'https://www.united.com/travel/checkin/start.aspx',
      "Virgin America": 'https://www.virginamerica.com/flight-check-in'
    }
    
    const flightStatus = {
      A: 'Active', 
      C: 'Canceled',
      D: 'Diverted',
      DN:  'Data source needed',
      L: 'Landed',
      NO:  'Not Operational',
      R: 'Redirected',
      S: 'On-Time',
      U: 'Unknown'
    }

    const styles = {
      checkInButton: {
        display: 'inline',
        float: 'right'
      },
      gridList: {
        width: '100%',
        height: '40%',
      },
      card: {
        width: '100%',
        height: 364,
      },
      singleCard: {
        width: '100%',
        height: 400
      },
      avatar: {
        backgroundColor: teal500,
      },
      cardHeader: {
        height: '20%',
      },
      center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      centerArrow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      centerDiv: {
        position: 'relative',
      },
      city: {
        fontWeight: 300,
        color: grey500
      },
      airport: {
        fontWeight: 300,
      },
    }
    if (!this.props.returnFlightStatus) {
      return (
        <div>
          <MuiThemeProvider>
            <Card style={styles.singleCard}>
              <CardHeader
                title="Flight Information"
                subtitle={'Status: '+ flightStatus[this.props.flight.status] }
                avatar={<Avatar icon={<ActionFlightTakeoff />}
                  style={styles.avatar}
                  color={white}/>}
                style={styles.cardHeader}/>
              <a href = {airlineCheckInUrls[this.props.flight.airline]}>
              <FlatButton label="Check-In" primary={true} style={styles.checkInButton} />
              </a>
              <Divider/>
              <CardTitle
                title={this.props.flight.airline + ' ' + this.props.flight.flightNumber}
                subtitle={'Leaving at: ' + this.props.flight.leaveTime + ' on ' + this.props.flight.leaveDate} />
              <GridList
                style = {styles.gridList}
                cols = {9} >
                <GridTile
                  cols = {4}
                  style = {styles.centerDiv} >
                  <div
                    style = {styles.center} >
                    <h3
                      style = {styles.airport}>
                      {this.props.flight.departurePort}
                    </h3>
                    <h2
                      style = {styles.city}>
                      {this.props.flight.departureCity}
                    </h2>
                  </div>
                </GridTile>
                <GridTile
                  style = {styles.centerDiv} >
                  <Arrow
                    style = {styles.centerArrow} />
                </GridTile>
                <GridTile
                  cols = {4}
                  style = {styles.centerDiv} >
                  <div
                    style = {styles.center} >
                    <h3
                      style = {styles.airport}>
                      {this.props.flight.arrivalPort}
                    </h3>
                    <h2
                      style = {styles.city}>
                      {this.props.flight.arrivalCity}
                    </h2>
                  </div>
                </GridTile>
              </GridList>
              <CardHeader
                title={'Flight Duration ' + this.props.flight.flightDuration}
                style={styles.cardHeader}>
              </CardHeader>
            </Card>
          </MuiThemeProvider>
        </div>
      )


    }
    else {
      if (!this.state.returnFlight) {
        return (
          <div>
            <MuiThemeProvider>
              <Card style={styles.card}>
                <CardHeader
                  title="Flight Information"
                  subtitle={'Status: '+ flightStatus[this.props.flight.status] }
                  avatar={<Avatar icon={<ActionFlightTakeoff />}
                    style={styles.avatar}
                    color={white}/>}
                  style={styles.cardHeader}/>
                <a href = {airlineCheckInUrls[this.props.flight.airline]}>
                <FlatButton label="Check-In" primary={true} style={styles.checkInButton} />
                </a>
                <Divider/>
                <CardTitle
                  title={this.props.flight.airline + ' ' + this.props.flight.flightNumber}
                  subtitle={'Leaving at: ' + this.props.flight.leaveTime + ' on ' + this.props.flight.leaveDate} />
                <GridList
                  style = {styles.gridList}
                  cols = {9} >
                  <GridTile
                    cols = {4}
                    style = {styles.centerDiv} >
                    <div
                      style = {styles.center} >
                      <h3
                        style = {styles.airport}>
                        {this.props.flight.departurePort}
                      </h3>
                      <h2
                        style = {styles.city}>
                        {this.props.flight.departureCity}
                      </h2>
                    </div>
                  </GridTile>
                  <GridTile
                    style = {styles.centerDiv} >
                    <Arrow
                      style = {styles.centerArrow} />
                  </GridTile>
                  <GridTile
                    cols = {4}
                    style = {styles.centerDiv} >
                    <div
                      style = {styles.center} >
                      <h3
                        style = {styles.airport}>
                        {this.props.flight.arrivalPort}
                      </h3>
                      <h2
                        style = {styles.city}>
                        {this.props.flight.arrivalCity}
                      </h2>
                    </div>
                  </GridTile>
                </GridList>
                <CardHeader
                  title={'Flight Duration ' + this.props.flight.flightDuration}
                  style={styles.cardHeader}>
                </CardHeader>
              </Card>
            </MuiThemeProvider>
            <RaisedButton onTouchTap = { (e) => {e.preventDefault(); this.changeToReturnFlight()}} fullWidth = {true} label={"Return Flight Info"} primary={true} />
          </div>
        )
        }
          else {
            return(
            <div>
              <MuiThemeProvider>
                <Card style={styles.card}>
                <CardHeader
                  title="Return Information"
                  subtitle={'Status: '+ flightStatus[this.props.returnFlight.status] }
                  avatar={<Avatar icon={<ActionFlightTakeoff />}
                  style={styles.avatar}
                  color={white}/>}
                  style={styles.cardHeader}/>
                  <a href = {airlineCheckInUrls[this.props.flight.airline]}>
                  <FlatButton label="Check-In" primary={true} style={styles.checkInButton} />
                  </a>
                <Divider/>
                <CardTitle
                  title={this.props.returnFlight.airline + ' ' + this.props.returnFlight.flightNumber}
                  subtitle={'Leaving at: ' + this.props.returnFlight.leaveTime + ' on ' + this.props.returnFlight.leaveDate} />
                <GridList
                  style = {styles.gridList}
                  cols = {9} >
                  <GridTile
                    cols = {4}
                    style = {styles.centerDiv} >
                    <div
                      style = {styles.center} >
                      <h3
                        style = {styles.airport}>
                        {this.props.returnFlight.departurePort}
                      </h3>
                      <h2
                        style = {styles.city}>
                        {this.props.returnFlight.departureCity}
                      </h2>
                    </div>
                  </GridTile>
                  <GridTile
                    style = {styles.centerDiv} >
                    <Arrow
                      style = {styles.centerArrow} />
                  </GridTile>
                  <GridTile
                    cols = {4}
                    style = {styles.centerDiv} >
                    <div
                      style = {styles.center} >
                      <h3
                        style = {styles.airport}>
                        {this.props.returnFlight.arrivalPort}
                      </h3>
                      <h2
                        style = {styles.city}>
                        {this.props.returnFlight.arrivalCity}
                      </h2>
                    </div>
                  </GridTile>
                </GridList>
                <CardHeader
                  title={'Flight Duration ' + this.props.returnFlight.flightDuration}
                  style={styles.cardHeader}>
                </CardHeader>

            </Card>
          </MuiThemeProvider>
          <RaisedButton onTouchTap = { (e) => {e.preventDefault(); this.changeToDepartureFlight()}} fullWidth = {true} label={"Departure Flight Info"} primary={true} />
        </div>
      )
    }
  }
}
}


export default FlightCard;
