import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 body{
  font-family: 'Roboto Slab', serif;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  --webkit-font-smoothing: antialiased;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
  transition: 0.2s;
 
  
  &&:hover{
    opacity: 0.7;
     background-color: aliceblue;
  }
}
`
