import { Container, ProfileHeader } from './styles'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo titulo" />
      <ProfileHeader>
        <div>
          <h3>Abner Santos</h3>
          <a href="#">Sair</a>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/107922389?s=400&u=d3c34939c53eca72f562272447710d988834e90b&v=4"
          alt="imagem de perfil"
        />
      </ProfileHeader>
    </Container>
  )
}
