const formatDate = date => {
  return new Date(date).toLocaleDateString('pt-Br', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default formatDate
