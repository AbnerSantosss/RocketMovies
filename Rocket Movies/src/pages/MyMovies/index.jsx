import { Container, TopMain, CardMovies, Content } from './styles'
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
          <button>
            <FiPlus /> Adicionar filmes
          </button>
        </TopMain>
        <Content>
          {/* -------------------------Movie-Card-------------------- */}
          <CardMovies>
            <h1>Interestellar</h1>
            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              harum reiciendis rerum ea libero laborum, eum magnam voluptatem
              at, quam quis assumenda neque eos ad iusto. Porro ab deserunt
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi rerum mollitia quos ducimus eius, nobis exercitationem,
              voluptas dolorum doloremque, delectus illum laborum beatae
              consequatur facere cupiditate quibusdam ipsam ea hic.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* -------------------------Movie-Card-------------------- */}
          <CardMovies>
            <h1>O Poderoso Chefão</h1>
            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              harum reiciendis rerum ea libero laborum, eum magnam voluptatem
              at, quam quis assumenda neque eos ad iusto. Porro ab deserunt
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi rerum mollitia quos ducimus eius, nobis exercitationem,
              voluptas dolorum doloremque, delectus illum laborum beatae
              consequatur facere cupiditate quibusdam ipsam ea hic.
            </p>
            <div className="tagsSection">
              <Tag title="Conspiração" />
              <Tag title="Drama" />
              <Tag title="Família" />
              <Tag title="Mafia" />
            </div>
          </CardMovies>{' '}
          {/* -------------------------Movie-Card-------------------- */}
          <CardMovies>
            <h1>Interestellar</h1>
            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              harum reiciendis rerum ea libero laborum, eum magnam voluptatem
              at, quam quis assumenda neque eos ad iusto. Porro ab deserunt
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi rerum mollitia quos ducimus eius, nobis exercitationem,
              voluptas dolorum doloremque, delectus illum laborum beatae
              consequatur facere cupiditate quibusdam ipsam ea hic.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>{' '}
          {/* -------------------------Movie-Card-------------------- */}
          <CardMovies>
            <h1>Interestellar</h1>
            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              harum reiciendis rerum ea libero laborum, eum magnam voluptatem
              at, quam quis assumenda neque eos ad iusto. Porro ab deserunt
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi rerum mollitia quos ducimus eius, nobis exercitationem,
              voluptas dolorum doloremque, delectus illum laborum beatae
              consequatur facere cupiditate quibusdam ipsam ea hic.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>{' '}
          {/* -------------------------Movie-Card-------------------- */}
          <CardMovies>
            <h1>Interestellar</h1>
            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              harum reiciendis rerum ea libero laborum, eum magnam voluptatem
              at, quam quis assumenda neque eos ad iusto. Porro ab deserunt
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi rerum mollitia quos ducimus eius, nobis exercitationem,
              voluptas dolorum doloremque, delectus illum laborum beatae
              consequatur facere cupiditate quibusdam ipsam ea hic.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>{' '}
          {/* -------------------------Movie-Card-------------------- */}
          <CardMovies>
            <h1>Interestellar</h1>
            <div>
              <FiStar /> <FiStar /> <FiStar /> <FiStar />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              harum reiciendis rerum ea libero laborum, eum magnam voluptatem
              at, quam quis assumenda neque eos ad iusto. Porro ab deserunt
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi rerum mollitia quos ducimus eius, nobis exercitationem,
              voluptas dolorum doloremque, delectus illum laborum beatae
              consequatur facere cupiditate quibusdam ipsam ea hic.
            </p>
            <div className="tagsSection">
              <Tag title="Ficção Cientifica" />
              <Tag title="Drama" />
              <Tag title="Família" />
            </div>
          </CardMovies>
          {/* -------------------------Movie-Card-------------------- */}
        </Content>
      </main>
    </Container>
  )
}
