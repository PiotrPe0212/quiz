import * as React from "react";
import { connect } from "react-redux";

import { htmlType } from "./actions/index"

class QuestionType extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: 'no',
    }
  };

  render() {
    return (

     <div key="4" >
        <form className=" d-flex flex-row justify-content-center">
        <div className="radio ml-2 mr-2">
            <label>
              <input type="radio" value="ALL" checked={this.props.type === "ALL"} onChange={this.updateType.bind(this)} />
              All
    </label>
          </div>
          <div className="radio ml-2 mr-2">
            <label>
              <input type="radio" value="HTML" checked={this.props.type === "HTML"} onChange={this.updateType.bind(this)} />
              HTML
    </label>
          </div>
          <div className="radio ml-2 mr-2">
            <label>
              <input type="radio" value="CSS" checked={this.props.type === "CSS"} onChange={this.updateType.bind(this)} />
              CSS
          </label>
          </div>
          <div className="radio ml-2 mr-2">
            <label>
              <input type="radio" value="JS" checked={this.props.type === "JS"} onChange={this.updateType.bind(this)} />
              JavaScript
        </label>
          </div>
          <div className="radio ml-2 mr-2">
            <label>
              <input type="radio" value="React" checked={this.props.type === "React"} onChange={this.updateType.bind(this)} />
              React
      </label>
          </div>
        </form>
      </div>
    )
  }

  updateType(event) {
    this.props.htmlType(event.target.value);
    
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.typeRed
  }
};
const mapDispatchToProps = dispatch => {
  return {
    htmlType: (event) => { dispatch(htmlType(event)) }
  }
};

export const QType = connect(mapStateToProps, mapDispatchToProps)(QuestionType);


