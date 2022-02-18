import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

function NewProduct() {
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')
    }
    loadOrders()
  }, [])

  return (
    <Container>
      <div>Ok</div>
    </Container>
  )
}

export default NewProduct
