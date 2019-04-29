import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBook } from "../../actions/profileActions";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isbn: "",
      author: "",
      readdate: "",
      errors: {},
      disabled: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const bookData = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      readdate: this.state.readdate
    };
    console.log(this.props);
    this.props.addBook(bookData, this.props.history);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-book">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center"> Add Book</h1>
              <p className="lead text-center">Add books that you have read.</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Title *"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="ISBN *"
                  name="isbn"
                  value={this.state.isbn}
                  onChange={this.onChange}
                  error={errors.isbn}
                />
                <TextFieldGroup
                  placeholder="Author *"
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                  error={errors.author}
                />
                <h6>Date Read</h6>
                <TextFieldGroup
                  name="readdate"
                  type="date"
                  value={this.state.readdate}
                  onChange={this.onChange}
                  error={errors.readdate}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddBook.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addBook }
)(withRouter(AddBook));
