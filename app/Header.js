import React from 'react';
import styles from './App.scss';
import './normalize.css';
import logo from './sba-logo.svg'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }

  componentWillMount() {
    console.log("ooioioioi")
    axios.get('/test')
      .then(function(res) {
        console.log(res)
      })
      .then(function(err) {
        console.log(err)
      })
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <nav className={styles.header}>
        <img className={styles.logo} src={logo}/>
        </nav>
      </div>
    );
  }
}
