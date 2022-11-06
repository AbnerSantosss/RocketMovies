import styled from 'styled-components'

import backgroundImg from '../../assets/img/rectangle.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > div:nth-child(5) {
    margin-top: 15px;
  }
  > div:nth-child(6) {
    margin-top: 15px;
  }
  > div:nth-child(7) {
    margin-top: 15px;
  }

  > input {
    margin-top: 10px;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    color: #cac4cf;
    margin-bottom: 48px;
  }

  a {
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-top: 42px;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  > h2 {
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.GREY_WHITE};
    margin-bottom: 48px;
  }

  > button {
    margin-top: 24px;
    border: none;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
