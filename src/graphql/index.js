export { default as client } from './client';

// queries
export { default as GET_PRACTICE_ID } from './queries/practiceIdQuery';
export { default as GET_PRACTICE_PAGE } from './queries/practiceContentQuery';
export { default as GET_PRACTICES } from './queries/practices';
export { default as GET_PRACTICES_BY_TAG } from './queries/practicesByTagQuery';
export { default as GET_TAGS } from './queries/tags';

// mutations
export { default as CREATE_TAG } from './mutations/createTagMutation';
export { default as DELETE_TAG } from './mutations/deleteTagMutation';
export { default as LIKE_PRACTICE } from './mutations/likePracticeMutation';
export { default as MODIFY_PRACTICE_TAGS } from './mutations/modifyPracticeTagsMutation';
