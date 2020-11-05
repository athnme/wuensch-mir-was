import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const BarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e6f1f2;
  padding: 16px;
`;

const SearchContainer = styled.input`
  background: white;
  margin: 0;
  border: none;
  border-radius: 24px;
  width: 50%;
  max-width: 480px;
  height: 24px;
`;

export default function TopBar({ heading }) {
  return (
    <>
      <BarContainer>
        <h1>{heading}</h1>

        <SearchContainer />
      </BarContainer>
    </>
  );
}

TopBar.propTypes = {
  heading: PropTypes.string.isRequired,
};
