import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
          <TextField hintText="Username" />
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <TextField hintText="Password" />
        </FormControl>
        <br />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
