import React from "react";
import ReactDOM from 'react-dom';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MockedProvider} from "@apollo/react-testing";
import PageIntro from '../index';
import {GET_PRACTICE_PAGE} from "../../../../graphql";

const practice = [{
  __typename: "Practice",
  id: "5ec55c99d36579001355faae",
  title: "A title",
  subtitle: "A subtitle",
  coverImage: "https://fake.url/an_image.jpeg",
  authors: {
    id: "123",
    firstName: "testFirstName",
    lastName: "testLastName",
  },
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

const apolloMocks = [
  {
    request: {
      query: GET_PRACTICE_PAGE,
    },
    result: {data: {practice}}
  },
];

afterEach(cleanup);


it("renders BodyIntro without crashing", () => {

  console.log(">>>", practice[0].authors);

  const { getByTestId } = render(
    <MockedProvider mocks={apolloMocks}>
      <PageIntro props={practice[0]}/>
    </MockedProvider>);
});

