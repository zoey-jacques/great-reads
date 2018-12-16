import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";
import SignUp from "./component";

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);