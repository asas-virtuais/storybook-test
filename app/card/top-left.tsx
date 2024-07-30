import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const TopImageContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardTopLeft = ({ children }: PropsWithChildren) => {
  return (
    <TopImageContainer>
      {children}
    </TopImageContainer>
  )
}

export default CardTopLeft
