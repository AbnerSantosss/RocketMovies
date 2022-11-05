import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 58px;

  > main {
    width: 1137px;
    height: 222.85px;
    margin: 50px auto;

    > div::-webkit-scrollbar {
      background: rgba(255, 133, 155, 0.05);

      border-radius: 20px; /* roundness of the scroll thumb */
    }

    > div::-webkit-scrollbar-thumb {
      background: #ff859b;
      border-radius: 8px;
    }
  }
`

export const TopMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    width: 207px;
    height: 48px;
    font-size: 16px;
    font-family: 'Roboto Slab';

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLACK};
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;

    &:disabled {
      // aqui estou me referindo quando esse botão esteja desabilitado

      opacity: 0.5;
    }

    &&:hover {
      opacity: 0.7;
    }
  }
`

export const CardMovies = styled.div`
  width: 1049px;
  padding: 32px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.GREY_WHITE};
  }

  > p {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.COLORS.GREY};
    line-height: 25px;
  }

  .tagsSection {
    display: flex;
    gap: 8px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 24px;

  height: 357.54px;
  overflow-y: auto;
  padding: 30px;
  width: 1137px;
`
