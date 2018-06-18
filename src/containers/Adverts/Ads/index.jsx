import React, { PureComponent } from 'react'
import ImgCar from 'core/assets/images/car.jpg'
import { Title, Text } from 'components'
import { StyledAds, StyledContent, StyledItem, StyledInfo } from './styled.js'

class Ads extends PureComponent {
  renderStatus(status) {
    return {
      'ACTIVE': <Text.Darken className="blue" uppercase>Ativo</Text.Darken>,
      'INACTIVE': <Text.Darken uppercase>Inativo</Text.Darken>,
      'SOLD': <Text.Darken className="green" uppercase>Vendido</Text.Darken>
    }[status]
  }

  render() {
    const {
      adv: {
        brand,
        info,
        fuel,
        name,
        plate,
        published,
        year
      }
    } = this.props

    return(
      <StyledAds status={info.status}>
        <StyledContent>
          <StyledItem>
            <img src={ImgCar} alt="Car"/>
            <div>
              <Title>{brand}</Title>
              <Title>{name}</Title>
              <Text.Medium>{year} | {fuel} | {plate}</Text.Medium>
              <Text.Light>{published}</Text.Light>
            </div>
          </StyledItem>
          <StyledInfo>
            {info.bestSale && (
              <div>
                <Text.Medium uppercase >Melhor Oferta</Text.Medium>
                <Text.Darken>{info.bestSale}</Text.Darken>
              </div>
            )}
            {info.fipe && (
              <div>
                <Text.Medium uppercase>Valor da Fipe</Text.Medium>
                <Text.Darken>{info.fipe}</Text.Darken>
              </div>
            )}
            {info.countDown && (
              <div>
                <Text.Medium uppercase>Tempo restante</Text.Medium>
                <Text.Darken>{info.countDown}</Text.Darken>
              </div>
            )}
            {info.fipePercent && (
              <div>
                <Text.Medium uppercase>Percentual da Fibe</Text.Medium>
                <Text.Darken className="green">{info.fipePercent}</Text.Darken>
              </div>
            )}
            {info.status && (
              <div>
                <Text.Medium uppercase>Status</Text.Medium>
                {this.renderStatus(info.status)}
              </div>
            )}

            {info.minPrice &&(
              <div>
                <Text.Medium uppercase>Valor mínimo</Text.Medium>
                <Text.Darken>{info.minPrice}</Text.Darken>
              </div>
            )}
            {info.buyNow && (
              <div>
                <Text.Medium uppercase>Compre agora</Text.Medium>
                <Text.Darken>{info.buyNow}</Text.Darken>
              </div>
            )}
            {info.totalAd && (
              <div>
                <Text.Medium uppercase>Vezes anúnciado</Text.Medium>
                <Text.Darken>{info.totalAd}</Text.Darken>
              </div>
            )}
            {info.lastAd && (
              <div>
                <Text.Medium uppercase>Último anúncio</Text.Medium>
                <Text.Darken uppercase>{info.lastAd}</Text.Darken>
              </div>
            )}
            {info.totalProposals && (
              <div>
                <Text.Medium uppercase>Total de propostas</Text.Medium>
                <Text.Darken>{info.totalProposals}</Text.Darken>
              </div>
            )}
          </StyledInfo>
        </StyledContent>
      </StyledAds>
    )
  }
}

export default Ads
