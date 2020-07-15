import React from "react";
import { cleanup, render } from "../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import Explore from '../Explore';

afterEach(cleanup);

it("renders the Explore hero without crashing", () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <Explore exploreMessage="Wazzup" />
    </MockedProvider>
  );

  expect(getByTestId("exploreMsg")).toHaveTextContent("Wazzup");
});

it("matches the snapshot", () => {
  const { asFragment } = render(
    <MockedProvider mocks={[]}>
      <Explore exploreMessage="Snapshottin it up" />
    </MockedProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
