import { MockedProvider } from "@apollo/client/testing";
import { render, screen, waitFor } from "@testing-library/react";
import Panel from "./Panel";
import { GET_ALL_CHARACTERS } from "../../queries/rickandmortyapi";

const MOCK = [
  {
    request: {
      query: GET_ALL_CHARACTERS,
      variables: { page: 1 },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: "1",
              name: "__TEST__",
              image: "__TEST__",
              status: "Alive",
              species: "Human",
              origin: {
                id: "1",
                name: "Earth (C-137)",
                dimension: "Dimension C-137",
                type: "Planet",
                residents: []
              },
              location: {
                id: "3",
                name: "Citadel of Ricks",
                dimension: "unknown",
                type: "Planet",
                residents: []
              },
              episode: []
            },
          ],
        },
      },
    },
  },
];

describe("Panel component", () => {
  it("should render loading spinner when loading is true", () => {
    render(
      <MockedProvider mocks={MOCK} addTypename={false}>
        <Panel />
      </MockedProvider>
    );

    expect(screen.getByTestId("Spinner")).toBeInTheDocument();
  });

  it("should render error message when error return", async () => {
    const ERROR_MOCK = [
      {
        request: {
          query: GET_ALL_CHARACTERS,
          variables: { page: 1 },
        },
        error: new Error("An error occurred"),
      },
    ];

    render(
      <MockedProvider mocks={ERROR_MOCK} addTypename={false}>
        <Panel />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Sorry try later.")).toBeInTheDocument();
    });
  });

  it("should render character card", async () => {
    render(
      <MockedProvider mocks={MOCK} addTypename={false}>
        <Panel />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("__TEST__")).toBeInTheDocument();
    });
  });
});
