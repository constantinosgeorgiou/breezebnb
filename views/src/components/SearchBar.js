import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';

const Locations = [
  { Locations: 'Limassol' },
  { Locations: 'Nicosia' },
  { Locations: 'Athens' },
];

const useStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

class LocationSearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
  }
  onSearchRentals(event) {
    event.preventDefault();
    console.log("BACK END reqest working");
    let data = {
      listing_location: this.refs.Location.value
    };

    var request = new Request('http://localhost:5000/listings/search', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request)
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data)
        })
      })
    alert('Check in console to see results F12 Devtools')
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment><form>
        <input type="text" ref="Location" />
        <button onClick={this.onSearchRentals.bind(this)}>Search</button>
      </form> </Fragment>
    );
  }
}
export default withStyles(useStyles)(LocationSearchBar);
