import styled from "styled-components";

export const PanelWrapper = styled.div`
  .panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-gap: 12px;
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
