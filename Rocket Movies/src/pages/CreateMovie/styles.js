import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > div {
    width: 1137px;
    height: 783px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin: 40px auto;

    > a {
      display: flex;
      align-items: center;
      gap: 2px;
      color: ${({ theme }) => theme.COLORS.ROSE};
      margin-bottom: 24px;
    }
  }
`

export const Content = styled.div`
  height: 800px;
  padding: 9px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: auto;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    display: flex;
    gap: 40px;
  }
`
