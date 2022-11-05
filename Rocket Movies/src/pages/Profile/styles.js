import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;
    background: rgba(255, 133, 155, 0.05);
    display: flex;

    > a {
      color: ${({ theme }) => theme.COLORS.ROSE};
      display: flex;
      align-items: center;
      gap: 8px;

      margin-left: 144px;
    }
  }

  > form {
    width: 340px;
    margin: 64px auto;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div:nth-child(3) {
      margin-top: 16px;
    }

    > div:nth-child(4) {
      margin-bottom: 24px;
    }
  }
`

export const Avatar = styled.div`
  height: 120px;
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  > img {
    width: 164px;
    height: 165px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ROSE};

    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`
