import React, { useEffect, useState } from 'react'

import ArrowImageOff from '../../assets/arrow-off.png'
import ArrowImage from '../../assets/arrow.png'
import Offers from '../../assets/offers.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Title,
  ContainerItems,
  Arrow,
  CategoryButton,
  CategoryImg,
  Wrapper
} from './styles'

function CarouselOffers() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      const newProducts = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setProducts(newProducts)
    }

    loadProducts()
  }, [])

  useEffect(() => {
    setFilteredProducts(products.slice(count, count + 4))
  }, [products, count])

  function moveCarousel(direction) {
    if (direction === 'minus') {
      setCount(count - 1)
    }

    if (direction === 'plus') {
      setCount(count + 1)
    }
  }

  return (
    <Container>
      <Title src={Offers} alt="logo-categorias" />
      <ContainerItems>
        {count + 4 < products.length ? (
          <Arrow
            onClick={() => moveCarousel('plus')}
            src={ArrowImage}
            alt="seta"
            rotate={1}
          />
        ) : (
          <Arrow src={ArrowImageOff} alt="seta" />
        )}
        {filteredProducts.map(product => (
          <Wrapper key={product.id}>
            <CategoryImg src={product.url} />
            <p>{product.name}</p>
            <p>{product.formatedPrice}</p>
            <CategoryButton>Peça Agora</CategoryButton>
          </Wrapper>
        ))}
        {count > 0 ? (
          <Arrow
            onClick={() => moveCarousel('minus')}
            src={ArrowImage}
            alt="seta"
          />
        ) : (
          <Arrow rotate={1} src={ArrowImageOff} alt="seta" />
        )}
      </ContainerItems>
    </Container>
  )
}

export default CarouselOffers
