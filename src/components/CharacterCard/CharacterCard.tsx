    import React, { FC } from "react";
    import { CardWrapper } from "./CharacterCard.styled";
    import { Button, Container, Row } from "react-bootstrap";
    import { Character, Episode, Maybe } from "../../gql/graphql";

    interface CardProps {
      character: Character,
      onCardClick: (episodes: Array<Maybe<Episode>>) => void;
    }

    const CharacterCard: FC<CardProps> = ({character, onCardClick}) => {
      return (
        <CardWrapper>
          <div className="card">
            <div className="card__img" style={ { backgroundImage: `url('${character.image || 'https://picsum.photos/200'}')`}}></div>
            <div className="card__body">
             <p className="lead mb-0"><b>{character.name}</b></p>
             <p className="d-flex align-items-center mb-2"><span className={ `status status--${character.status}` }></span><span className="text-capitalize">{character.status}</span> - {character.species}</p>
             <p className="mb-0"><b>Origin:</b></p>
             <p className="mb-2">
               {character?.origin?.name === 'unknown'
                 ? 'Unknown'
                 : `${character?.origin?.type} - ${character?.origin?.name} - ${character?.origin?.dimension} - ${character?.origin?.residents?.length} resident${character?.origin?.residents?.length !== 1 ? 's' : ''}`}
             </p>
             <p className="mb-0"><b>Location:</b></p>
             <p className="mb-2">
               {character?.location?.name === 'unknown'
                 ? 'Unknown'
                 : `${character?.location?.type} - ${character?.location?.name} - ${character?.location?.dimension} - ${character?.location?.residents?.length} resident${character?.location?.residents?.length !== 1 ? 's' : ''}`}
             </p>
              {character.episode?.length && (
                <Container>
                  <Row className="text-center">
                    <Button variant="outline-primary" size="sm" onClick={()=>onCardClick(character?.episode)}>Seen in {character.episode?.length || 0} episode{character.episode?.length !== 1 ? 's' : ''}</Button>
                  </Row>
                </Container>
              )}
           </div>
         </div>
        </CardWrapper>
     );
    };

    export default CharacterCard;
