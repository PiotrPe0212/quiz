import React from "react";
import { connect } from "react-redux";
import { getQuestionsList, delQuestionFromDB } from "./data_base"
import { EditQ } from "./edit_question"
import {QType} from "./question_type"




 class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titlesList: []
        }
    }
    render() {
        return (
            <div key="3">
            <QType />
            <button className=" col-md-auto btn btn-primary m-2 ml-3 bg-primary align-items-center"
            onClick={this.listUpdate.bind(this)}>Load</button>
                <ul className="d-flex justify-content-center mt-4 pl-3 pr-3 flex-column">
                    {this.renderList()}
                </ul>
            </div>
        )
    }

    renderList() {
        const list = this.state.titlesList.map((question) => {
            return (<li key={question.title} className="list-group-item  container" >
                <div className="row">
                    <div className="col-7 font-weight-bold d-flex justify-content-center align-items-center ">{question.title}</div>
                    <button className=" col btn btn-primary m-2 bg-danger border-danger"
                        onClick={this.deleteQuestion.bind(this, question.title)}>Delete</button>
                    <EditQ className="col" title={question.title} question={question.question} type={question.type} />
                </div>
            </li>)

        })
        return list
    }
listUpdate(){
    const ChosenType = this.props.selectedType
    const that = this
    const list = getQuestionsList(ChosenType)
    const promL = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(list.next()
            )
        }, 50);
    })
    list.next()
    promL.then(function (value) {
        const list = value.value
        that.setState({
            titlesList: list
        })
        console.log(that.state.titlesList)

    })
}
    componentDidMount() {
       this.listUpdate()
    }
    deleteQuestion(question) {
        let questionToDel
        let newState = []
        this.state.titlesList.forEach((element) => {
            if (element.title == question) {
                questionToDel = element.id
            }
            else {
                newState.push(element)
            }
            console.log(element.id)
        });

        delQuestionFromDB(questionToDel)
        this.setState({
            titlesList: newState
        })
    }
}

const mapStateToProps = (state) => {
    return {
      selectedType: state.typeRed
    }
  };
  
  export const QList = connect(mapStateToProps)(List);
  
