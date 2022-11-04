import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;

  height: 116px;
  padding: 24px 123px;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #3e3b47;

  > h1 {
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }
  > input {
    width: 630px;
    height: 56px;
    padding: 19px 24px;

    background: #262529;
    border-radius: 10px;
    border: none;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;

  > div {
    text-align: end;
    h3 {
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.GREY_WHITE};
    }

    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: ${({ theme }) => theme.COLORS.GREY_100};
    }
  }

  > img {
    width: 64px;
    border-radius: 50%;
  }
`
