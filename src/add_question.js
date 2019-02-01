import React from "react";
import { addQuestionToDB } from "./data_base"
import { QType } from "./question_type";
import { connect } from "react-redux";
export class AddQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputValue: '',
      inputType: ''
    };
  }
  render() {
    return (
      <div key="2" >
        <form className="d-flex justify-content-center mt-4 m-2">
        <textarea className="form-control" placeholder="Question title" value={this.state.inputTitle} onChange={event => this.updateInputTitle(event)} />
          <textarea className="form-control" placeholder="Question text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)} />
        </form>
        <QType />
        <div className="d-flex  justify-content-center">
          <button className="btn btn-primary mt-2 mb-2" onClick={this.send.bind(this)}>Submit</button>
        </div>
      </div>

    )

  }
  updateInputTitle(event) {
    this.setState({
      inputTitle: event.target.value
    });
  }
  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  send() {
    if(this.props.type == "ALL"){
      alert("Chose the question type")
    }
    else{
    addQuestionToDB(this.state.inputTitle, this.state.inputValue, this.props.type)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.typeRed
  }
};

export const AddQ = connect(mapStateToProps)(AddQuestion);
