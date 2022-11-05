import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #262529;

  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > input {
    height: 56px;
    width: 100%;
    background: transparent;
    border: none;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > &&::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 16px;
    fill: #948f99;
  }
`
