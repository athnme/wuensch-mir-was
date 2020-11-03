import styled from 'styled-components/macro';

import checkSymbol from '../assets/checked.svg';

const ListBtn = styled.button`
  margin: none;
  border: none;
  background: none;
  padding: none;
`;

export default function WishListButton() {
  return (
    <>
      <ListBtn>
        <img src={checkSymbol} alt="check" />
      </ListBtn>
    </>
  );
}
