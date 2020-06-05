import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import PracticeCount from '../PracticeCount';

import { GET_PRACTICES } from "../../../graphql";
import mockPracticeData from "../../../testHelpers/mockPracticeData";

afterEach(cleanup);

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICES
    },
    result: { data: { practices: mockPracticeData } }
  },
];

it("renders contributor count successfully", async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <PracticeCount />
    </MockedProvider>
  );

  await waitFor(() => expect(getByTestId("practiceNum")).toBeInTheDocument());
  expect(getByTestId("practiceNum")).toHaveTextContent("9");
});

