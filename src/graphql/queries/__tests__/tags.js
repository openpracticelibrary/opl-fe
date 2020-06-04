import EasyGraphQLTester from 'easygraphql-tester';
import fs from 'fs';
import path from 'path';
import { GET_TAGS } from "../../../graphql";

const schema = fs.readFileSync(path.join('/Users/jibarton/git/opl-content-api/exports/graphql', 'schema.graphql'), 'utf8');

const tester = new EasyGraphQLTester(schema);

it('should compile GET_TAGS', () => {
  tester.test(true, GET_TAGS, {});
});

it('should return expected data from GET_TAGS', () => {
  const result = tester.mock({
    query: GET_TAGS,
    fixture: {
      data: {
        tags: [
          {
            id: '1',
            tag: 'foo',
          },
          {
            id: '2',
            tag: 'bar',
          }
        ]
      }
    }
  })

  expect(result.data.tags[0].id).toBe('1');
  expect(result.data.tags[0].tag).toBe('foo');
  expect(result.data.tags[1].id).toBe('2');
  expect(result.data.tags[1].tag).toBe('bar');
});
