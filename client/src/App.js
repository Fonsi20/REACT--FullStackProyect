
// /client/App.js
import React, { Component } from "react";
import ViewDetail from './ViewDetail';
import axios from "axios";
import Home from './Home';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  // initialize our state 
  state = {
    data: [],
    id: null,
    brand: null,
    model: null,
    color: null,
    fuel_type: null,
    engine_volume: null,
    traction: null,
    price: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    selected: [],
    newselected: [],
  };

  givemestate(id, brand, model, color, fuel_type, engine_volume, traction, price, data) {
    console.log("APP: " + id);
    this.setState({ data: data });
    this.setState({ id: id });
    this.setState({ brand: brand });
    this.setState({ model: model });
    this.setState({ color: color });
    this.setState({ fuel_type: fuel_type });
    this.setState({ engine_volume: engine_volume });
    this.setState({ traction: traction });
    this.setState({ price: price });
  }

  carToDelete(id) {
    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: id
      }
    });
  }

  render() {
    return (<Router>
      <div>
        <Route exact path="/" render={(props) => <Home returnstate={this.givemestate.bind(this)} />} />
        <Route path="/ViewDetail" render={(props) => <ViewDetail
          carDelete={this.carToDelete.bind(this)}
          id={this.state.id}
          brand={this.state.brand}
          model={this.state.model}
          color={this.state.color}
          fuel_type={this.state.fuel_type}
          engine_volume={this.state.engine_volume}
          traction={this.state.traction}
          price={this.state.price} />} />
      </div>
    </Router >
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


export default App;