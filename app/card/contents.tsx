import styled from 'styled-components'

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 12px;
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 40px 30px 34px 34px;
  ul {
    padding-left: 18px;
  }
  h3, p, ul {
    margin: 0px;
  }
`

export default CardContents