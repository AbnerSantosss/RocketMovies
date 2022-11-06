import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GREY_200};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GREY_100}` : 'none'};

  margin-bottom: 9px;
  border-radius: 8px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    > svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &&::placeholder {
      color: ${({ theme }) => theme.COLORS.GREY_100};
    }
  }
`
