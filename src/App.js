import React, { Component } from "react";
import "./App.scss";
import Division from "./components/Division";
import Database from "./database/Database";

class App extends Component {
  dbs = {
    vanilla: new Database("vanilla"),
    kaiserreich: new Database("kaiserreich"),
    road_to_56: new Database("road_to_56"),
  }
  render() {
    return (
      <div className="App">
        <Division dbs={this.dbs} />
        <div className="footer-space"></div>
        <footer>
          This site uses <a href="https://github.com/taw/hoi4/">Hearts of Iron IV - Division Designer</a> (c) Tomasz Wegrzanowski, licensed under the MIT License.
        </footer>
      </div>
    );
  }
}

export default App;
