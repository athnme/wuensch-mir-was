import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import WishListButton from './ListButton';

const Container = styled.div`
  margin: 16x;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0px 12px 8px -8px rgba(17, 125, 140, 0.31);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function WishListItem({ title }) {
  return (
    <>
      <Container>
        {title}
        <WishListButton />
      </Container>
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
