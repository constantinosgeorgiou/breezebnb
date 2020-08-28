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

  onSearchRentals() {
    alert('Write code for api post request')
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs>
              <Autocomplete
                id="Location-box"
                options={Locations}
                getOptionLabel={(option) => option.Locations}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Location" variant="outlined" />}
              />
            </Grid>
            <Grid item xs>
              <form className={classes.container} noValidate>
                <TextField
                  id="Check_In"
                  label="Check In"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item xs>
              <form className={classes.container} noValidate>
                <TextField
                  id="Check_Out"
                  label="Check Out"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item xs>
              <Button onClick={() => {this.onSearchRentals()} }variant="contained" color="primary">
                Search
            </Button>
            </Grid>
          </Grid>
        </div>
      </Fragment>

    );
  }
}
export default withStyles(useStyles)(LocationSearchBar);
