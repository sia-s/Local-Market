import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormTextField from '../FormTextField';

const style = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

const CustomerUpdateForm = ({ handleSubmit, classes }) => {
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Field
        label="First Name"
        name="firstname"
        component={FormTextField}
        type="text"
      />
      <Field
        label="Last Name"
        name="lastname"
        component={FormTextField}
        type="text"
      />
      <Field
        label="Birthday"
        name="birthday"
        component={FormTextField}
        type="text"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Update
      </Button>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'customer_update'
})(withStyles(style)(CustomerUpdateForm));
