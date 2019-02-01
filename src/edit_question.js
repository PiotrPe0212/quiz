import React from "react";
import {editComponent, editContent} from "./data_base"

export class EditQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: this.props.title,
            oldTitle: this.props.title,
            inputValue: this.props.question,
            inputType: this.props.type,
            visibility: "none"
        };
    }
    render() {
        return (
            <div key={this.state.inputTitle} className={` ${this.elementWidth()} d-flex justify-content-center align-items-center`}>
                <button className={`d-${this.editButtonVisibility()} btn btn-primary mt-2 mb-2`} onClick={this.openForm.bind(this)}>Edit</button>
                <div className={`d-${this.state.visibility}`}>
                    <form className="d-flex  justify-content-center mt-4 mb-2">
                        <textarea className="form-control" value={this.state.inputTitle} onChange={event => this.updateInputTitle(event)} />
                        <textarea className="form-control" defaultValue={this.props.question} onChange={event => this.updateInputQuestion(event)} />
                    </form>
                    <select className="custom-select" value={this.state.inputType} onChange={event => this.updateInputType(event)}>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JS</option>
                        <option value="React">React</option>
                    </select>
                    <div className="d-flex  justify-content-center">
                        <button className="btn btn-primary m-2" onClick={this.saveNewDatas.bind(this)}>Save</button>
                        <button className="btn btn-primary m-2" onClick={this.closeForm.bind(this)}>Close</button>
                    </div>
                </div>

            </div>
        )
    }
    editButtonVisibility() {
        if (this.state.visibility == "visible") {
            return "none"
        }
        else {
            return "visible"
        }
    }
    elementWidth() {
        if (this.state.visibility == "visible") {
            return "w-100"
        }
        else {
            return "col"
        }
    }

    updateInputTitle(event) {
        this.setState({
            inputTitle: event.target.value
        });
    }
    updateInputQuestion(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    updateInputType(event) {
        this.setState({
            inputType: event.target.value
        });
    }
    closeForm(event) {
        this.setState({
            visibility: "none"
        });
    }
    openForm(event) {
        this.setState({
            visibility: "visible"
        });
    }

    saveNewDatas(){
        const state = this.state
editContent(state.oldTitle, state.inputTitle, state.inputValue, state.inputType )
    }
}


