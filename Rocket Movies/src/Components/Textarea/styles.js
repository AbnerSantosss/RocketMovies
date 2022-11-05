import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 250px;

  padding: 19px 16px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background: #262529;
  border-radius: 10px;

  border: none;
  resize: none;
`
