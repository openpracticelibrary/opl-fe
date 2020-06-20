import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";

import { GET_PRACTICES_BY_TAG_PAGINATION } from "../../graphql";
import AllPractices from "../AllPractices";

const mockPracticeData = [
  {
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
    curated: 1,
  }
];

const mockPracticeCountData = {
  __typename: "PracticeConnection",
  aggregate: {
    __typename: "PracticeAggregator",
    totalCount: 107
  }
};

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICES_BY_TAG_PAGINATION,
      variables: {
        start: 0,
        limit: 20,
        sort: "upvotes:DESC",
        tag: [],
      }
    },
    result: { data: { practices: mockPracticeData, practicesConnection: mockPracticeCountData } }
  },
];

it("renders with graphql response", async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <AllPractices />
    </MockedProvider>
  );

  expect(getByTestId("loadingComponent")).toBeInTheDocument();

  // wait for response to load
  await waitFor(() => expect(getByText("A title")).toBeInTheDocument())

  // make sure the card is on the page
  expect(getByTestId("practicecard")).toBeInTheDocument();

  expect(getByTestId("popularFilterComponent")).toBeInTheDocument();
  // const popularFilter = getByTestId("popularFilterButton");
});
