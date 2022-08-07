import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
  }
`

const ListasTarefas = styled.div`
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
        <input
          onChange={this.handleChange}
          value={this.state.tarefas}
          onKeyPress={this.enter} />
        <button onClick={this.add}>Adicionar</button>
        {this.state.listaTarefas.map((item) => (
          <div key={item.id}>
            <ul>
              <li>{item.tarefas}</li>
            </ul>
            <button onClick={() => this.remover(item.id)}>x</button>
          </div>
        ))}
      </ListasTarefas>
    )
  }
}