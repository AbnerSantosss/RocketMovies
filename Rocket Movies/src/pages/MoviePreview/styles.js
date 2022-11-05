import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  //=======SCROL-STYLE=======//
  main::-webkit-scrollbar {
    background: rgba(255, 133, 155, 0.05);
    width: 10px;
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  > main::-webkit-scrollbar-thumb {
    background: #ff859b;
    border-radius: 8px;
  }
`

export const Content = styled.main`
  width: 1137px;
  height: 432px;
  padding: 50px;

  overflow: auto;

  margin: 40px auto;

  > a {
    display: flex;
    align-items: center;
    gap: 2px;
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-bottom: 24px;
  }

  .title {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 19px;

    > h1 {
      font-weight: 500;
      font-size: 36px;

      color: ${({ theme }) => theme.COLORS.GREY_WHITE};
    }

    > div {
      display: flex;
      gap: 10px;
      > svg {
        fill: #ff859b;
      }
    }
  }

  .inforContent {
    display: flex;
    margin-top: 24px;
    margin-bottom: 40px;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > div {
      display: flex;
      gap: 8px;

      > img {
        width: 16px;
        border-radius: 50%;
      }
    }

    .timeSection {
      display: flex;
      align-items: center;
    }
  }

  .textSection p {
    text-align: justify;
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.GREY_WHITE};
  }
`
