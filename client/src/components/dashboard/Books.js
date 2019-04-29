import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteBook } from "../../actions/profileActions";

class Books extends Component {
  onDeleteClick(id) {
    this.props.deleteBook(id);
  }

  render() {
    console.log(this.props);
    const books = this.props.books.map(book => (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Moment format="YYYY/MM/DD">{book.readdate}</Moment>
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, book._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Books Read</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Read Date</th>
              <th />
            </tr>
            {books}
          </thead>
        </table>
      </div>
    );
  }
}

Books.propTypes = {
  deleteBook: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteBook }
)(Books);
