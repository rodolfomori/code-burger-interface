import React, { useEffect, useState } from 'react'

import ArrowImageOff from '../../assets/arrow-off.png'
import ArrowImage from '../../assets/arrow.png'
import Categories from '../../assets/categories.png'
import api from '../../services/api'
import {
  Container,
  Title,
  ContainerItems,
  Arrow,
  CategoryButton,
  CategoryImg,
  Wrapper
} from './styles'

function CarouselCategories() {
  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  useEffect(() => {
    setFilteredCategories(categories.slice(count, count + 4))
  }, [categories, count])

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
      <Title src={Categories} alt="logo-categorias" />
      <ContainerItems>
        {count + 4 < categories.length ? (
          <Arrow
            onClick={() => moveCarousel('plus')}
            src={ArrowImage}
            alt="seta"
            rotate={1}
          />
        ) : (
          <Arrow src={ArrowImageOff} alt="seta" />
        )}
        {filteredCategories.map(category => (
          <Wrapper key={category.id}>
            <CategoryImg src={category.url} />
            <CategoryButton>{category.name}</CategoryButton>
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

export default CarouselCategories
