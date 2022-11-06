import { Container, Background, Form } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { Input } from '../../Components/input'

import { Link } from 'react-router-dom'

export function Singnin() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça Seu Login</h2>
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="text" placeholder="Password" icon={FiLock} />
        <Button title="Entrar" />
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
