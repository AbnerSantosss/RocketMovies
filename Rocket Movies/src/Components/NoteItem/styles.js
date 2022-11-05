import styled from 'styled-components'

export const Container = styled.div`
  background-color: aliceblue;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'trassparent' : theme.COLORS.GREY_200};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GREY_100}` : 'none'};

  margin-bottom: 9px;
  border-radius: 8px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }
`
