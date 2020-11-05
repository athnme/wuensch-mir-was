import styled from 'styled-components/macro';

const Button = styled.button`
  border: none;
  background: #117d8c;
  border-radius: 50%;
  font-size: 2rem;
  color: white;
  line-height: 1;
  width: 56px;
  height: 56px;
  cursor: pointer;
  box-shadow: 0px 8px 8px -4px rgba(17, 125, 140, 0.65);
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1;
  transition: 0.9s;

  transform: rotate(0deg);
`;

export default Button;
