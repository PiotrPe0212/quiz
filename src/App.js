import * as React from "react";

import {BrowserRouter as Router,Route} from 'react-router-dom';
import { MainPage } from "./main_page";
import { NewGame} from "./game";
import {AddQ} from "./add_question"
import {QList} from "./list"
import {EditQ} from "./edit_question"

export class App extends React.Component {

  render() {
    return (
      <Router >
      <div className = "d-flex justify-content-center align-items-center">
      <div className = "bg-secondary shadow-lg rounded mt-5">
      <MainPage />
      <Route path="/newG" component={NewGame} />
      <Route path="/addQ" component={AddQ} />
      <Route path="/goToL" component={QList} />
      <Route path="/editQ" component={EditQ} />
     </div>
      </div>
      </Router>
    );
  }
}


