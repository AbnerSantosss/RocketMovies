import { Container, Background, Form } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../Components/Button'
import { Input } from '../../Components/input'

import { Link } from 'react-router-dom'

export function SingnUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="Password" placeholder="Senha" icon={FiLock} />
        <Button title="Cadastrar" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
