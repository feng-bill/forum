import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postAction";
import "./PostForm.css";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //does the error checking
  componentWillReceiveProps(newPorps) {
    if (newPorps.errors) {
      this.setState({ errors: newPorps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //<div style={{ paddingTop: 100 }}>
  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <hr/>
        <div className="is-4"><strong>Ask a Question:</strong></div>
        <div className="ancestor2">
          <div className="box">
            <div className="posting">
              <form onSubmit={this.onSubmit}>
                <TextAreaFieldGroup
                  placeholder="Ask your question here"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
                <div className="control">
                  <div className="field is-grouped">
                    <input
                      className="button is-primary"
                      type="submit"
                      value="Post"
                    />
                  </div>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
