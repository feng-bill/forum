import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment } from "../../actions/postAction";
import "./CommentForm.css";
class CommentForm extends Component {
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
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: "" });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        <div className ="commentForm">
        <div className="box"> 
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={this.avatar} alt="" />
              </p>
            </figure>
            <form onSubmit={this.onSubmit}>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <TextAreaFieldGroup
                      placeholder="Add a comment..."
                      name="text"
                      value={this.state.text}
                      onChange={this.onChange}
                      error={errors.text}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button type="submit" className="button">
                      Post comment
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </article>
        </div></div>
      </React.Fragment>
    );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
