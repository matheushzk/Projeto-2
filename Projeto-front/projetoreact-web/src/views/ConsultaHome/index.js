import React, {useState} from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FiltrarConsulta from "../../components/ConsultaFiltrar"
import * as Styl from './styles'
import ConsultaCartao from "../../components/ConsultaCartao"

function Home() {

  //criar uma constante (vetor)
  //no vetor --> primeiro parâmetro será o estado que está a página atualizada
  //--> segundo parâmetro será uma função para atualizar o estado
  //nela que habilito qual estado está sendo atualizado
  //função --> atualizaFiltroAtivo

  const [filtroAtivo, atualizaFiltroAtivo] = useState('hoje');


  //tela home está renderizando o que eu tenho dentro do header
  return (
  
  //retorno da tela chamada no index.js do src
  <Styl.Container>
    <Header/>
      <Styl.AreaFiltro>
        <button type="button" onClick={()=>atualizaFiltroAtivo("todas")}>
          <FiltrarConsulta titulo="Todas" ativo={filtroAtivo == "todas"}/>
        </button>
        <button type="button" onClick={()=>atualizaFiltroAtivo("hoje")}>
          <FiltrarConsulta titulo="Hoje" ativo={filtroAtivo == "hoje"}/>
        </button>
        <button type="button" onClick={()=>atualizaFiltroAtivo("semana")}>
          <FiltrarConsulta titulo="Semana" ativo={filtroAtivo == "semana"}/>
        </button>
        <button type="button" onClick={()=>atualizaFiltroAtivo("mes")}>
          <FiltrarConsulta titulo="Mês" ativo={filtroAtivo == "mes"}/>
        </button>
        <button type="button" onClick={()=>atualizaFiltroAtivo("ano")}>
          <FiltrarConsulta titulo="Ano" ativo={filtroAtivo == "ano"}/>
        </button>
      </Styl.AreaFiltro>

    <Styl.Titulo>
      <h3>Consultas</h3>
    </Styl.Titulo>

    <Styl.Conteudo>
      <ConsultaCartao/>
      <ConsultaCartao/>
      <ConsultaCartao/>
      <ConsultaCartao/>
      <ConsultaCartao/>
    </Styl.Conteudo>
    <Footer/>
  </Styl.Container>
  )
}


export default Home;
