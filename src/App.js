import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from './components/dropdown';
import {
  example1
} from './__mock__/dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: '320px' }}>
          <label>Simple dropdown</label>
          <Dropdown
            options={example1}
            selected={example1[3].value}
            onSelectChange={(data) => {
              console.log(data);
            }}
          />
          <br />
          <label>Simple dropdown with search enabled</label>
          <Dropdown
            searchEnabled
            options={example1}
            selected={example1[3].value}
            onSelectChange={(data) => {
              alert(data.value);
            }}
          />
          <label>Simple dropdown with multi-selected</label>
          <Dropdown
            multiSelected
            options={example1}
            selected={[example1[3].value]}
          />
        </div>
      </div>
    );
  }
}

export default App;
