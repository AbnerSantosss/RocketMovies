import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    background: transparent;
    border: none;
    padding: 12px;

    > &&::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 16px;
    fill: #948f99;
  }
`
