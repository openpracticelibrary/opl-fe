import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import renderer from 'react-test-renderer';
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
  const tree = renderer.create(
    <MockedProvider mocks={[]}>
      <Explore exploreMessage="Snapshottin it up" />
    </MockedProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
