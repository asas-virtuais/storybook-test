import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const BottomImageContainer = styled.div`
  grid-column: 1
  grid-row: 2
`

const CardBottomLeft = ({ children }: PropsWithChildren) => {
  return (
    <BottomImageContainer>
      {children}
    </BottomImageContainer>
  )
}

export default CardBottomLeft
