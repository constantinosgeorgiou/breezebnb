import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button} from 'react-bootstrap';

const Locations = [
  { Locations: 'Limassol' },
  { Locations: 'Nicosia' },
  { Locations: 'Athens' },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function LocationSearchBar() {
  const classes = useStyles();


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
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>

  );
}
