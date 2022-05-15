import React from "react"
import styled from "styled-components"

const BlocoDaMensagem = styled.div`
background-color: lightgreen;
border-radius: 10px;
padding: 10px;
margin: 10px;
`
const ContainerControles = styled.div`
margin: 20px 10px;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
column-gap: 10px;
`
const ContainerMensagens = styled.div`
display: flex;
flex-direction: column;
`

class App extends React.Component {
  state = {
    usuario: "",
    texto: "",
    listaDeMensagem: []

  }

  mudaUsuario = (evento) => {
this.setState({usuario: evento.target.value})
  }

  mudaTexto = (evento) => {
    this.setState({texto: evento.target.value})

  }
  enviarMensagem = () => {
    const novaMensagem = {usuario: this.state.usuario, texto: this.state.texto}
    const novaLista = [...this.state.listaDeMensagem, novaMensagem]
    this.setState({listaDeMensagem: novaLista})
    this.limpar()
  }

  limpar = () => {
    this.setState({usuario:"", texto:""})
  }

render() {
 
  const componentesMensagem = this.state.listaDeMensagem.map ((msg, index, array)=> {
    return (
      <BlocoDaMensagem key={index}>
        <strong>{msg.usuario}:</strong> {msg.texto}
      </BlocoDaMensagem>
    )

  })

  return (
    
    <div>
    
      <h1>WhatsLab</h1>
      <ContainerMensagens>
      {componentesMensagem}

      <ContainerControles>
      <input 
      value={this.state.usuario}
      onChange={this.mudaUsuario}
      placeholder='Usuário' 
      />
      
      <input 
      value={this.state.texto}
      onChange={this.mudaTexto} 
      placeholder='Texto da Mensagem' 
      />
      <button onClick={this.enviarMensagem}>Enviar</button>
      </ContainerControles>
      </ContainerMensagens>
    </div>
  )
  }
}


export default App;
