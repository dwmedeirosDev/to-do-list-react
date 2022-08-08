import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  *{
    font-family: 'Indie Flower', cursive;
    margin: 10px;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #0ffff8;
  }
`

const ListasTarefas = styled.div`
  background-color: #e5e66b;
  margin: 0 auto;
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid black;

  h1{
    margin-bottom: 30px;
  }
`

const ConteinerList = styled.div`
  input{
    width: 200px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
  }

  button{
    width: 120px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
  }
`

const Resultado = styled.div`
  display: flex;
  align-items: center;

  li{
    list-style-type: none;
  }

  button{
    width: 40px;
    height: 30px;
    background: red;
    border-radius: 5px;
    border: 1px solid black;
  }

`


export default class App extends Component{

  state = {
    tarefas: "",
    listaTarefas: []
  }

  handleChange = (event) => {
    this.setState({
      tarefas: event.target.value
    })
  }

  add = () => {
    if (this.state.tarefas !== ""){
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefas: this.state.tarefas,
          id: Date.now()
        }),
        tarefas: ""
      })
    }
  }

  remover = (id) => {
    this.setState({
      listaTarefas: this.state.listaTarefas.filter((item) => item.id !== id)
    })
  }

  enter = (event) => {
    if (this.state.tarefas.length > 0 && event.key === "Enter"){
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefas: this.state.tarefas,
          id: Date.now()
        }),
        tarefas: ""
      })
    }
  }

  render(){
    return(
      <ListasTarefas>
         <GlobalStyle />
         <h1>Lista</h1>
        <ConteinerList>
        <input
          onChange={this.handleChange}
          value={this.state.tarefas}
          onKeyPress={this.enter} />
        <button onClick={this.add}>Adicionar</button>
        </ConteinerList>
        {this.state.listaTarefas.map((item) => (
          <Resultado key={item.id}>
            <ul>
              <li>{item.tarefas}</li>
            </ul>
            <button onClick={() => this.remover(item.id)}>x</button>
          </Resultado>
        ))}
      </ListasTarefas>
    )
  }
}