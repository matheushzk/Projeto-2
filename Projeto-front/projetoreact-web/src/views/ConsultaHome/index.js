import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FiltrarConsulta from "../../components/ConsultaFiltrar"
import * as Styl from './styles'

function Home() {
  //tela home está renderizando o que eu tenho dentro do header
  return (
  
  //retorno da tela chamada no index.js do src
  <Styl.Container>
    <Header/>
      <Styl.AreaFiltro>
        <FiltrarConsulta titulo="Todos"/>
        <FiltrarConsulta titulo="Hoje"/>
        <FiltrarConsulta titulo="Semana"/>
        <FiltrarConsulta titulo="Mês"/>
        <FiltrarConsulta titulo="Ano"/>
      </Styl.AreaFiltro>
    <Footer/>
  </Styl.Container>
  )
}


export default Home;
