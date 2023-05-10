import React, { FC, useState } from "react";
import { PanelWrapper } from "./Panel.styled";
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../../queries/rickandmortyapi";
import { Character, Episode, Maybe } from "../../gql/graphql";
import { Button, ListGroup, Modal, Row, Spinner } from "react-bootstrap";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterPagination from "../CharacterPagination/CharacterPagination";
import { useNavigate, useSearchParams } from "react-router-dom";


const Panel: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [page, setPage] = useState<number>(currentPage);
  const {loading, error, data} = useQuery(GET_ALL_CHARACTERS, {
    variables: { page }
  });
  const [selectedEpisodes, setSelectedEpisodes] = useState<Array<Maybe<Episode>>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCardClick = (episodes: Array<Maybe<Episode>>) => {
    setSelectedEpisodes(episodes);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedEpisodes([]);
    setShowModal(false);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    searchParams.set('page', page.toString());
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return (
    <PanelWrapper>
      {loading ?
        (
          <Row className="justify-content-md-center p-5"><Spinner data-testid="Spinner" animation="border" variant="secondary" /></Row>
        ) :
        error ?
          (
            <p>Sorry try later.</p>
          ) : (
            <>
              <CharacterPagination
                pages={data?.characters?.info?.pages}
                currentPage={page}
                handlePageChange={handlePageChange}
              />
              <div className="panel">
                {data?.characters?.results.map((character: Character) => (
                  <CharacterCard
                    character={character}
                    key={character.id}
                    onCardClick={(episodes = []) => handleCardClick(episodes)}
                  />
                ))}
              </div>
            </>
          )
      }
      {selectedEpisodes && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Episodes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {selectedEpisodes && selectedEpisodes?.map((episode: Maybe<Episode>) =>
                <ListGroup.Item key={episode?.id}>{episode?.name}</ListGroup.Item>
              )}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </PanelWrapper>
  );
};

export default Panel;
