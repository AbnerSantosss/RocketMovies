import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../Components/input'
import { Button } from '../../Components/Button'

import { Container, Avatar } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
          Voltar
        </a>
      </header>
      <Avatar>
        <img
          src="https://avatars.githubusercontent.com/u/107922389?s=400&u=d3c34939c53eca72f562272447710d988834e90b&v=4"
          alt="Fotodo do Usuário"
        />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" name="avatar" id="avatar" />
        </label>
      </Avatar>
      <form>
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="E-Mail" icon={FiMail} />
        <Input type="password" placeholder="Senha atual" icon={FiLock} />
        <Input type="password" placeholder="Nova Senha" icon={FiLock} />
        <Button title="Salvar" />
      </form>
    </Container>
  )
}
