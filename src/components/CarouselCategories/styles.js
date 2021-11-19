import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-bottom: 60px;
  background: #efefef;
`

export const Title = styled.img`
  width: 400px;
`

export const ContainerItems = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  align-items: baseline;
`

export const Arrow = styled.img`
  height: 56px;
  cursor: pointer;
  transform: ${props => props.rotate && 'rotate(180deg)'};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: ease-in-out 1s;
`

export const CategoryImg = styled.img`
  width: 250px;
  border-radius: 15px;
`

export const CategoryButton = styled.button`
  background: #9758a6;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;
  cursor: pointer;
  width: 250px;
  height: 66px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  color: #ffffff;
`
