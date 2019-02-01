import * as React from "react";
import { connect } from "react-redux";
import { getQuestion, dbLength } from "./data_base";
import { QType } from "./question_type";
import { Card } from "./card"
import _ from "lodash"

export class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: {
        title: 'no',
        question: 'no',
        type: 'no',
        id: 0
      },
      visible: "none"
    };
  }

  render() {
    return (
      <div key="1" >
        <div className="d-flex  justify-content-center">
          <button className="btn btn-primary mt-2 mb-2" onClick={this.loadQuestion.bind(this)}>Start</button>
        </div>
        <QType onClick />
        <div className="d-flex  justify-content-center">
          <Card visible={this.state.visible} color={this.state.color} title={this.state.question.title} question={this.state.question.question} />
        </div>
      </div>
    )
  }

  loadQuestion() {
    const that = this;
    const ChosenType = that.props.selectedType
    let random,
     idArray,
     gettingQ,
     settingVal
    const promL = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(dbLng.next()
        )
      }, 150);
    }),
     promSet = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(gettingQ.next()
        )
      }, 300);
    }),
   setting = (value)=> {
        settingVal = value.value
      that.setState({
        question: { title:settingVal.title,
          question: settingVal.question },
        visible: "visible"
      })
    }
    const dbLng = dbLength(ChosenType)
    dbLng.next()
    promL.then(function (value) {
      let i = 0
      idArray = value.value
      random =  _.sample(idArray);
      
       gettingQ = getQuestion(random)
      gettingQ.next()
      promSet.then(function (value) {
setting(value)
      })
     
    })
  }
}

const mapStateToProps = (state) => {
  return {
    selectedType: state.typeRed
  }
};

export const NewGame = connect(mapStateToProps)(Game);

