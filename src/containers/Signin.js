import { connect } from "react-redux";

/**
 * Local import
 */
import Signin from "../components/Signin";

// Action Creators
import { updateFormField } from "../store/reducer";

const mapStateToProps = (state) => ({
  loginInput: state.loginInput,
  passwordInput: state.passwordInput,
  passwordConfirmInput: state.passwordConfirmInput,
  firstNameInput: state.firstNameInput,
  lastNameInput: state.lastNameInput,
});

const mapDispatchToProps = (dispatch) => ({
  updateFormField: (fieldName, input) => {
    dispatch(updateFormField(fieldName, input));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
