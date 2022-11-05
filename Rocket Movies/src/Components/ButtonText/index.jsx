import { Container } from './styles'

export function ButtonText({ isActive, title, loading = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  )
}
