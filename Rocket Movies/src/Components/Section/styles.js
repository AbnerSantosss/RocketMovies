import styled from 'styled-components'

export const Container = styled.section`
  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GREY};
  }

  > div {
    height: 88px;

    background: #0d0c0f;
    border-radius: 8px;
    margin-top: 2.4rem;
  }
`
