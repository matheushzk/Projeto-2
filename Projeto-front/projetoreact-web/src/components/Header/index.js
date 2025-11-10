import React from "react"
import * as Styl from './styles'
import logo from '../../assets/logo.png'
import sino from '../../assets/sino.png'

function Header() {
  return (
    <Styl.Container>
      <Styl.Esq>
        <img src={logo} alt="Logo"/>
      </Styl.Esq>
      <Styl.Dir>
        <a href="#">Início</a>
        <span className="divisor"/>
        <a href="#">Nova Consulta</a>
        <span className="divisor"/>
        <a href="#" id="notificacao">
          <img src={sino} alt="Sino"/>
          <span>5</span>
        </a>
      </Styl.Dir>
    </Styl.Container>
  );
}

export default Header;
