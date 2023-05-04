import React from "react";
import { act } from "@testing-library/react";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createRoot } from "react-dom/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_PATH_API,
  cache: new InMemoryCache()
})

describe("App", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    act(() => {
      createRoot(div).render(<ApolloProvider client={client}>
        <App />
      </ApolloProvider>);
    });
  });
});
