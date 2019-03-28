import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
   

        <div className="container-fluid" >
          {/* <div className="table-row "></div>
        <div className="text">1st year</div>
        <div className="text">2nd year</div>
        <div className="table-row "></div> */}


          <div className="table-row ">
            <div className="text"><select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select></div>
            <div className="text"><input type="num"></input></div>
            <div className="text"><input type="num"></input></div>
            <div className="text">icon</div>
          </div>
          <div className="table-row">
            <div className="text"></div>
            <div className="text colspan2"><textarea></textarea></div>
            <div className="text"></div>
          </div>
          <div className="table-row">
            <div className="text alright"><button>type here</button></div>
          </div>

        </div>
      </Fragment>
    );
  }
}

export default App;
