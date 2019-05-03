import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { books } = this.props;

    // title, isbn(use if statement for image), author, readdate

    const bookItems = books.map(book => (
      <li key={book._id} className="list-group-item">
        <h4>{book.title}</h4>
        <p>
          <Moment format="MM/DD/YYYY">{book.readdate}</Moment>
        </p>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <img
          className="img-fluid"
          alt=" "
          style={{ width: "100px" }}
          src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
        />
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-info">Books Read</h3>
          {bookItems.length > 0 ? (
            <ul className="list-group">{bookItems}</ul>
          ) : (
            <p className="text-center">Bookshelf empty</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
