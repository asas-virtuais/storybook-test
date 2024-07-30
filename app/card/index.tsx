import { PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{}>

export const CardGrid = ({children}: PropsWithChildren) => {
  return (
    null
  )
}

export const CardTopImage = () => {
  return (
    null
  )
}

export const CardBottomImage = () => {
  return (
    null
  )
}

export const CardContent = ({children}: PropsWithChildren) => {
  return (
    null
  )
}

const Card = ({children}: Props) => {
  return (
      <CardGrid> {/* 1.38419619 1fr 1.38419619fr */}
        <CardTopImage/>
        <CardBottomImage/>
        <CardContent>{children}</CardContent>
      </CardGrid>
  )
}

export default Card
