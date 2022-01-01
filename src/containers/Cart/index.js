import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do carrinho" />
      <CartItems />
    </Container>
  )
}
