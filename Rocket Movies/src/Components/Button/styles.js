import styled from 'styled-components'

export const Container = styled.button`
  width: 340px;
  height: 56px;
  font-size: 16px;
  font-family: 'Roboto Slab';

  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_BLACK};
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  border: none;

  &:disabled {
    // aqui estou me referindo quando esse botão esteja desabilitado

    opacity: 0.5;
  }

  &&:hover {
    opacity: 0.7;
  }
`
