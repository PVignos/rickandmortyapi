import React, { FC } from 'react';
import { CardWrapper } from './Card.styled';

interface CardProps {
  character: any
}

const Card: FC<CardProps> = ({character}) => (
 <CardWrapper data-testid="Card" className="card">
   <img src={character.image} alt={character.name} />
   <div className="card-body">
     <h5>{character.name}</h5>
     <p>{character.status} - {character.species}</p>

     <h6>Last know location: {character.location.name}</h6>
   </div>
 </CardWrapper>
);

export default Card;
