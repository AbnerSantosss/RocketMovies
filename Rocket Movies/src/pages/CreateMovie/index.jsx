import { Header } from '../../Components/Header'
import { Input } from '../../Components/Input'
import { NoteItem } from '../../Components/NoteItem'
import { ButtonText } from '../../Components/ButtonText'
import { Section } from '../../Components/Section'
import { Textarea } from '../../Components/Textarea'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content } from './styles'

import { Link } from 'react-router-dom'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <div>
        <Link to="/mymovies">
          <FiArrowLeft />
          Voltar
        </Link>
        <Content>
          <h1>Novo Filme</h1>
          <div>
            <Input type="text" placeholder="Titulo" />
            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observação" />
          <Section title="Marcadores">
            <NoteItem value="Drama" />
            <NoteItem isNew value="" placeholder="Novo marcador" />
          </Section>
          <div className="btn">
            <ButtonText title="Excluir filme" />
            <ButtonText isActive title="Salvar alterações" />
          </div>
        </Content>
      </div>
    </Container>
  )
}
