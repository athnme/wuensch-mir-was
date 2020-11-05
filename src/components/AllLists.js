import React from 'react';
import styled from 'styled-components/macro';
import ListItem from './ListItem';

const AllListsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style-type: none;
  padding: 0px 16px;
  marging: 16px 0px;
`;

export default function AllLists() {
  return (
    <>
      <AllListsContainer>
        <ListItem />
        <ListItem />
        <ListItem />
      </AllListsContainer>
    </>
  );
}
