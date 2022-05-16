import React from "react";
import styled from "styled-components";
import CreatorPlaylistForm from "./components/CreatorPlaylist";
import Header from "./components/Header";
import ManagerPlaylistform from "./components/ManagerPlaylist";

const ContainerApp = styled.div`
display: flex;
flex-direction: column;
background-color: lightgreen;
width: 100vw;
height: 100vh;
`
class App extends React.Component {
  state = {
    currentPage: "creatorPlaylistForm"
  }
changePage = (currentPage) => {
  this.setState({currentPage: currentPage})
}
  render () {
    const renderCurrentpage = () => {
      if (this.state.currentPage === "creatorPlaylistForm")
      return <CreatorPlaylistForm/>
      else if (this.state.currentPage === "ManagerPlaylistForm")
      return  <ManagerPlaylistform/>
    }
  return (
    <ContainerApp>
      <Header changePage={this.changePage} />
      {renderCurrentpage()}
    </ContainerApp>
  );
  }
}
export default App;