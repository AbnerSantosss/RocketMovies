import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-family: 'Roboto Slab';

  font-weight: 500;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.LIGHT_BLACK : theme.COLORS.ROSE};

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ROSE : theme.COLORS.BACKGROUND_200};

  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
`
