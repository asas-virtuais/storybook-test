import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const TopImageContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
`

const CardTopLeft = ({ children }: PropsWithChildren) => {
  return (
    <TopImageContainer>
      {children}
    </TopImageContainer>
  )
}

export default CardTopLeft
