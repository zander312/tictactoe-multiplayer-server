import React from 'react';
import styles from './App.scss';
import './normalize.css';
import logo from './sba-logo.svg'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
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
