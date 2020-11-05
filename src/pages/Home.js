import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';
import { getLists } from '../api/lists';
import AllLists from '../components/AllLists';
import TopBar from '../components/TopBar';

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  const AddNewList = styled.button`
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 50%;
    background: #222;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 16px;
    right: 16px;
  `;

  return (
    <div>
      <TopBar heading="listr" />
      <AllLists />
      {lists?.map((list) => (
        <Link key={list.id} to={`/${list.id}`}>
          {list.title}
        </Link>
      ))}
      <Link to="/add">
        <AddNewList>
          <h4>+</h4>
        </AddNewList>
      </Link>
    </div>
  );
};

export default Home;
