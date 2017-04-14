import React from 'react';
import styles from './SomeComponent.scss';
import logo from '../../assets/1000-secret-lives-cows-1.jpg'
import axios from 'axios';

export default class SomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animals: ''};
  }

  componentDidMount() {
    axios.get('/animals/domestic')
      .then(function(res) {
        console.log(res)
        this.setState({animals: res.data.animals})
      }.bind(this))
      .then(function(err) {
        console.log(err)
      })
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <p>Look an ajax using axios!: {this.state.animals}</p>
        <img className={styles.logo} src={logo}/>
      </div>
    );
  }
}
