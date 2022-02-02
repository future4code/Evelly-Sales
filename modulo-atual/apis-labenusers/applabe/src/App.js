import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";


export default class App extends React.Component {
  state = {
    labenusers: [],
    inputNome:'',
    inputEmail: ''

  }
  componentDidMount() {
    this.pegaUsuario()
   }

  pegaUsuario= () => {
    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
 {
    headers:{
      authorization: "Evelly-sales-joy"
     }
    }
    )
  .then((res) => {
    this.setState({ labenusers: res.data})
    console.log(res.data.name) 
  });