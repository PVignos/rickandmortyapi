import styled from "styled-components";

export const HeaderWrapper = styled.header`
  .container-fluid {
    background-color: #e9ecef;
    .nav {
      font-weight: 900;
      text-rendering: optimizeLegibility;
      font-size: 1.75rem;
      text-shadow: 2px 2px 2px rgb(0 0 0 / 0.4);
    }
    svg {
      fill: rgb(51, 51, 51);
      filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
      margin-right: 6px;
    }
  }
`;
