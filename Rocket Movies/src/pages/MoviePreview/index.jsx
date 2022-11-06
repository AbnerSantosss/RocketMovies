import { Container, Content } from './styles'
import { Header } from '../../Components/Header'
import { Tag } from '../../Components/Tag'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/mymovies">
          <FiArrowLeft />
          Voltar
        </Link>
        <div className="title">
          <h1>Interestelar</h1>
          <div>
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
        </div>
        <div className="inforContent">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/107922389?s=400&u=d3c34939c53eca72f562272447710d988834e90b&v=4"
              alt="Imagem de perfil abnersantos"
            />
            <p>Por Abner Santos</p>
          </div>
          <div className="timeSection">
            <FiClock />
            <p>04/11/22 às 10:27</p>
          </div>
        </div>
        <div className="tags">
          <Tag title="Ficção cientifica" />
          <Tag title="Drama" />
        </div>
        <div className="textSection">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
            natus autem temporibus perspiciatis vero animi blanditiis deleniti.
            Error sequi reiciendis inventore quas, enim perferendis? Repellendus
            minus delectus quod aliquid Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt reprehenderit at sed vel inventore.
            Deleniti ducimus consequatur voluptate officiis blanditiis, eius
            ipsam delectus beatae possimus, asperiores laborum iste impedit?
            Sit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Beatae culpa quam cum aut, magnam non! Velit quas cupiditate, magnam
            accusamus quos culpa magni debitis architecto, nisi veritatis maxime
            tenetur sapiente. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Perferendis, excepturi iure. Distinctio, debitis!
            Cumque ab corrupti voluptatibus natus eum ipsam, id odit architecto
            obcaecati rem. Officiis laborum culpa illo doloribus!dswws
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint at
            natus autem temporibus perspiciatis vero animi blanditiis deleniti.
            Error sequi reiciendis inventore quas, enim perferendis? Repellendus
            minus delectus quod aliquid Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt reprehenderit at sed vel inventore.
            Deleniti ducimus consequatur voluptate officiis blanditiis, eius
            ipsam delectus beatae possimus, asperiores laborum iste impedit?
            Sit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Beatae culpa quam cum aut, magnam non! Velit quas cupiditate, magnam
            accusamus quos culpa magni debitis architecto, nisi veritatis maxime
            tenetur sapiente. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Perferendis, excepturi iure. Distinctio, debitis!
            Cumque ab corrupti voluptatibus natus eum ipsam, id odit architecto
            obcaecati rem. Officiis laborum culpa illo doloribus!dswws
          </p>
        </div>
      </Content>
    </Container>
  )
}
