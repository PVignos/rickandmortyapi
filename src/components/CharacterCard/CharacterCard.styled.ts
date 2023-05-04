import styled from "styled-components";

export const CardWrapper = styled.div`
  & .card {
    border-radius: 6px 6px 10px 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    background: white;
    overflow: hidden;
    font-size: 0.85em;
    &__img {
      width: 100%;
      min-height: 220px;
      background: transparent no-repeat center;
      background-size: cover;
    }
    &__body {
      padding: 12px 15px;
      background: white;
    }
    .status {
      &--Alive, &--Dead, &--unknown {
        width: 6px;
        height: 6px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 6px;
      }
      &--Alive {
        background: rgb(85, 204, 68);
      }
      &--Dead {
        background: rgb(214, 61, 46);
      }
      &--unknown {
        background: gray;
      }
    }
  }
`;
