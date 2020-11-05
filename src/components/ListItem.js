import React from 'react';
import styled from 'styled-components/macro';

const ListItemContainer = styled.li`
  background: white;
  width: 216px;
  height: 195px;
  border-radius: 16px;
  transition: 0.5s;
  box-shadow: 0px 0px 2px 0px rgba(100, 00, 00, 1);
  @media (max-width: 480px) {
    width: calc(50% - 8px);
  }
  &:nth-child(even) {
    @media (max-width: 480px) {
      flex-break: after;
    }
  }
  &:hover {
    box-shadow: 0px 16px 24px -16px rgba(100, 00, 00, 0.75);
    transform: scale(1.05);
  }
`;

const ListItemImage = styled.img`
  object-fit: cover;
  border-radius: 16px;
  height: 100%;
  width: 100%;
`;

const ListItemTitleContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 16px;
  padding: 16px 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  bottom: calc(100% + 4px);
`;

const ListTitle = styled.h3`
  color: white;
`;

const ListOptions = styled.button`
  color: #e6f1f2;
  background: none;
  height: 24px;
  width: 24px;
  border: solid 2px #e6f1f2;
  border-radius: 12px;
  margin-left: auto;
`;

export default function ListItem() {
  return (
    <>
      <ListItemContainer>
        <ListItemImage
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.summit.co.uk%2Fwp-content%2Fuploads%2F2016%2F12%2Fchristmas_ads.jpg&f=1&nofb=1"
          alt="christmas"
        />
        <ListItemTitleContainer>
          <ListOptions />
          <ListTitle> My first ever List </ListTitle>
        </ListItemTitleContainer>
      </ListItemContainer>
    </>
  );
}
