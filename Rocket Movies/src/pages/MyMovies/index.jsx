import {
  Container,
  TopMain,
  CardMovies,
  Content,
  BtnAdd,
  TitleImage
} from './styles'
import { Header } from '../../Components/Header'

import { Tag } from '../../Components/Tag'

import { FiPlus, FiStar } from 'react-icons/fi'

export function MyMovies() {
  return (
    <Container>
      <Header />

      <main>
        <TopMain>
          <h1>Meus filmes</h1>

          <BtnAdd to="/createMovie">
            <FiPlus /> Adicionar filmes
          </BtnAdd>
        </TopMain>
        <Content>
          <CardMovies>
            <TitleImage to="/moviepreview">
              <img
                src="https://m.media-amazon.com/images/I/71qzTzxzoCL.jpg"
                alt="imagem do astronalta"
              />

              <h1>Interestellar</h1>
            </TitleImage>

            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              As reservas naturais da Terra estão chegando ao fim e um grupo de
              astronautas recebe a missão de verificar possíveis planetas para
              receberem a população mundial, possibilitando a continuação da
              espécie. Cooper é chamado para liderar o grupo e aceita a missão
              sabendo que pode nunca mais ver os filhos. Ao lado de Brand,
              Jenkins e Doyle, ele seguirá em busca de um novo lar.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* ------------------------------------ */}
          <CardMovies>
            <TitleImage to="/moviepreview">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/9/9c/Scarfaceposter.jpg"
                alt="imagem do astronalta"
              />

              <h1>Scarface</h1>
            </TitleImage>

            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Após receber residência permanente nos Estados Unidos em troca do
              assassinato de um oficial do governo cubano, Tony Montana se torna
              o chefe do tráfico de drogas em Miami. Matando qualquer um que
              entre em seu caminho, Tony eventualmente se torna o maior
              traficante da Flórida, controlando quase toda a cocaína que entra
              em Miami. Porém, a pressão da polícia, as guerras com cartéis
              colombianos e sua própria paranoia servem para alimentar as chamas
              de sua eventual queda.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* ------------------------------------ */}{' '}
          <CardMovies>
            <TitleImage to="/moviepreview">
              <img
                src="https://m.media-amazon.com/images/I/81SWBRKfExL.jpg"
                alt="imagem do astronalta"
              />

              <h1>O Senhor dos Anéis: A Sociedade do Anel</h1>
            </TitleImage>

            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Em uma terra fantástica e única, um hobbit recebe de presente de
              seu tio um anel mágico e maligno que precisa ser destruído antes
              que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho
              árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao
              seu lado para o cumprimento desta jornada, ele aos poucos pode
              contar com outros hobbits, um elfo, um anão, dois humanos e um
              mago, totalizando nove seres que formam a Sociedade do Anel.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* ------------------------------------ */}{' '}
          <CardMovies>
            <TitleImage to="/moviepreview">
              <img
                src="https://media.fstatic.com/7XemKYH1XtxN4MkKaVz1fYJpYp4=/290x478/smart/media/movies/covers/2011/07/f8503d117d5560c07478c1fde344a4e8.jpg"
                alt="Capa filme ilha do medo"
              />

              <h1>Ilha do medo</h1>
            </TitleImage>

            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Nos anos 1950, a fuga de uma assassina leva o detetive Teddy
              Daniels e seu parceiro a investigarem o seu desaparecimento de um
              quarto trancado em um hospital psiquiátrico. Lá, uma rebelião se
              inicia e o agente terá que enfrentar seus próprios medos.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* ------------------------------------ */}{' '}
          <CardMovies>
            <TitleImage to="/moviepreview">
              <img
                src="https://br.web.img2.acsta.net/pictures/210/403/21040322_20130913175754998.jpg"
                alt="imagem do astronalta"
              />

              <h1>Capitão Phillips</h1>
            </TitleImage>

            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Em 2009, piratas somalis invadem o navio cargueiro MV Maersk
              Alabama, dos Estados Unidos, e mantêm o capitão Richard Phillips e
              sua tripulação como reféns.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* ------------------------------------ */}{' '}
        </Content>
      </main>
    </Container>
  )
}
