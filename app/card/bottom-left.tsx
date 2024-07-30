import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const BottomImageContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
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

const CardBottomLeft = ({ children }: PropsWithChildren) => {
  return (
    <BottomImageContainer>
      {children}
    </BottomImageContainer>
  )
}

export default CardBottomLeft
