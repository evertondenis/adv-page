import React, { PureComponent } from 'react'
import Ads from 'containers/Adverts/Ads'
import AdvertsProvider from 'core/providers/adverts'
import { Preloader } from 'components'
import { StyledList } from './styled.js'

class List extends PureComponent {
  state = {
    adverts: [],
    isLoading: true
  }

  componentWillMount = () => {
    this.loadAdverts()
  }

  loadAdverts = () => {
    AdvertsProvider.all()
      .then((result) => {
        this.setState({
          isLoading: false,
          adverts: result.content
        })
    })
  }

  render() {
    const { adverts, isLoading } = this.state
    return (
      <section className="container">
        <StyledList>
          <h1>Santa Fé Veículos</h1>
          <Preloader active={isLoading}/>
          {!isLoading && (
            adverts.map(adv => <Ads key={adv.id} adv={adv}/>)
          )}
        </StyledList>
      </section>
    )
  }
}

export default List
