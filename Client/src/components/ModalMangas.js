import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addManga, updateManga } from "../actions/mangasActions";

class ModalManga extends Component {
  state = {
    show: false,
    name: this.props.editMode ? this.props.MangaToUpdate.name : "",
    year: this.props.editMode ? this.props.MangaToUpdate.year : "",
    author: this.props.editMode ? this.props.MangaToUpdate.author : "",
  };
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    const newManga = {
      name: this.state.name,
      year: this.state.year,
      author: this.state.author,
    };
    this.props.addManga(newManga);
    this.setState({ show: false });
  };
  update = () => {
    const updatedManga = {
      name: this.state.name,
      year: this.state.year,
      author: this.state.author,
    };
    this.props.updateManga(this.props.MangaToUpdate._id, updatedManga);
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.editMode ? "Edit" : "Add new manga"}
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>name:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
              </div>
              <div>
                <label>author:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="author"
                  value={this.state.author}
                />
              </div>
              <div>
                <label>year:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="year"
                  value={this.state.year}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.props.editMode ? this.update : this.add}
            >
              {this.props.editMode ? "Edit" : "Add manga"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addManga, updateManga })(ModalManga);
