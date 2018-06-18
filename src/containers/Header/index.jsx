import React from 'react'
import withRouter from 'react-router-dom/withRouter'
import Header from 'components/Header'
import Nav from 'components/Nav'
import Icon from 'components/Icon'
import logo from 'core/assets/images/logo.png'
import menuItems from 'core/constants/main-menu'
import PerfilImg from 'core/assets/images/perfil.png'
import StyledHero from './styled'

const HeaderNav = ({ location }) => (
  <Header logo={logo}>
    <Nav
      items={menuItems}
      location={location}
    />
    <StyledHero>
      <img src={PerfilImg} className="pic" alt="perfil"/>
      <div className="info">
        <p>Olá Carolina Steiner</p>
        <a href="" className="logout">Sair</a>
      </div>
      <Icon className="icon-config" icon="cog" />
    </StyledHero>
  </Header>
)

export default withRouter(HeaderNav)
