import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import React from 'react';
import logo from './logo.png';

class App extends React.Component {
  render() {
    return(
      <div>
        <img className='logo' src={logo} alt='logo'/>
        <div className='container'>
          //leave blank for now
        </div>
      </div>
    );
  }
}

export default App;
