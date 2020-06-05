import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import Community from '../Community';

import { GET_PRACTICES, GET_CONTRIBUTORS } from "../../../graphql";
import mockPracticeData from "../../../testHelpers/mockPracticeData";

afterEach(cleanup);

const mockContributorData = [
  {
    __typename: "UsersPermissionsUser",
    id: "2342123451",
  },
  {
    __typename: "UsersPermissionsUser",
    id: "478129411",
  }
];

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICES,
      variables: {}
    },
    result: { data: { practices: mockPracticeData } }
  },
  {
    request: {
      query: GET_CONTRIBUTORS
    },
    result: { data: { users: mockContributorData } }
  },
];

it("renders Community section properly", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <Community />
    </MockedProvider>
  );

  await waitFor(() => expect(getByTestId("practiceNum")).toBeInTheDocument());
  expect(getByTestId("communityHeader")).toBeInTheDocument();
});

