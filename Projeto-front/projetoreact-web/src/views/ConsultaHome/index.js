import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import * as Styl from './styles'

function Home() {
  //tela home está renderizando o que eu tenho dentro do header
  return (
  
  //retorno da tela chamada no index.js do src
  <Styl.Container>
    <Footer/>
    <Header/> 
  </Styl.Container>
  )
}


export default Home;
