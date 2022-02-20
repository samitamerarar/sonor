import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const HomeButton = styled(Button)`
  border-radius: 50px;
  background: #ededed;
  white-space: nowrap;
  padding: 12px 30px;
  color: #000;
  font-size: 1.2em;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  textDecoration: none;

  &:hover, &:active, &:focus {
    transition: all 0.2s ease-in-out;
    color: #c4ff23;
    background-color: #575b69;
    border-color: #575b69;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`

export const LinkButton = styled(Button)`
  border-radius: 50px;
  background: #575b69;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 1.2em;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  textDecoration: none;

  &:hover, &:active, &:focus {
    transition: all 0.2s ease-in-out;
    color: #c4ff23;
    background-color: #575b69;
    border-color: #575b69;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`
