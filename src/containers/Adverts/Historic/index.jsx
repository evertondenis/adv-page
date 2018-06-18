import React, { PureComponent } from 'react'
import HistoricProvider from 'core/providers/historic'
import { Preloader } from 'components'
import StyledHistoric from './styled'


class Historic extends PureComponent {
  state = {
    historic: [],
    isLoading: true
  }

  componentWillMount = () => {
    this.loadHistoric()
  }

  loadHistoric = () => {
    HistoricProvider.all()
      .then((result) => {
        this.setState({
          isLoading: false,
          historic: result.content
        })
    })
  }

  renderData = ({ title, total }) => (
    <div key={title}>
      <p className="title">{title}</p>
      <p className="total">{total}</p>
    </div>
  )

  render() {
    const { historic, isLoading } = this.state

    return (
      <div className="container">
        <Preloader active={isLoading}/>
        <StyledHistoric>
          {!isLoading && (
            historic.map(item => this.renderData(item))
          )}
        </StyledHistoric>
      </div>
    )
  }
}

export default Historic
