import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './queries/rickandmortyapi';
import Card from './components/Card/Card';

const App = () => {
  const {loading, error, data} = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error {error.message}</p>;
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <div className="content">

        <div className="cards">
          {loading ?
            (
              <p>Loading...</p>
            ) :
            error ?
              (
                <p>Sorry try later.</p>
              ) :
              data?.characters?.results.map((character: any) =>
                <Card character={character} key={character.id}/>
              )
          }
        </div>
      </div>
    </>
  );
};

export default App;
