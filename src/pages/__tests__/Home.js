import React from "react";
import { render, waitFor } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import { GET_PRACTICE_COUNT, GET_CURATED_PRACTICES, GET_CONTRIBUTORS } from "../../graphql";
import Home from "../Home";

const mockCuratedPracticeData = [{
  __typename: "Practice",
  id: "5ec55c99d36579001355faae",
  title: "A title",
  subtitle: "A subtitle",
  coverImage: "https://fake.url/an_image.jpeg",
  tags: [
    {
      __typename: "Tags",
      tag: "discovery",
    },
    {
      __typename: "Tags",
      tag: "value",
    },
  ],
  upvotes: 42,
  updatedAt: "2020-05-27T20:24:29.223Z",
  slug: "event-storming",
  mediaGallery: [
    {
      __typename: "ComponentPracticeBodyMediaGallery",
      link: "https://a.picture",
    },
    {
      __typename: "ComponentPracticeBodyMediaGallery",
      link: "https://a.video.thumbnail",
    },
  ],
  ama: [
    {
      __typename: "Questions",
      question: "When do I do this?",
    },
  ],
}];

const mockPracticeData = {
  __typename: "PracticeConnection",
  aggregate: {
    __typename: "PracticeAggregator",
    totalCount: 107
  }
};

const mockContributorData = {
  __typename: "UsersPermissionsUserConnection",
  aggregate: {
    __typename: "UsersPermissionsUserAggregator",
    totalCount: 50,
  }
};

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICE_COUNT,
      variables: {}
    },
    result: { data: { practicesConnection: mockPracticeData } }
  },
  {
    request: {
      query: GET_CURATED_PRACTICES,
      variables: {
        sort: "upvotes:desc"
      }
    },
    result: { data: { practices: mockCuratedPracticeData } }
  },
  {
    request: {
      query: GET_CONTRIBUTORS
    },
    result: { data: { usersConnection: mockContributorData } }
  },
];

it("renders with graphql response", async () => {
  const { getByTestId, getAllByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => expect(getByTestId("practiceNum")).toBeInTheDocument())
  await waitFor(() => expect(getAllByTestId("practicecard")[0]).toBeInTheDocument());

  expect(getAllByTestId("practicecard")).toHaveLength(1);
  expect(getByTestId("contributorNum")).toHaveTextContent("50");
  expect(getByTestId("practiceNum")).toHaveTextContent("107");
});
