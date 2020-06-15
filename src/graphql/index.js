export { default as client } from './client';

// queries
export { default as GET_PRACTICE_ID } from './queries/practiceIdQuery';
export { default as GET_PRACTICE_PAGE } from './queries/practiceContentQuery';
export { default as GET_PRACTICES } from './queries/practices';
export { default as GET_PRACTICES_BY_TAG } from './queries/practicesByTagQuery';
export { default as GET_PRACTICES_BY_KEYWORD } from './queries/practicesByKeywordQuery';
export { default as GET_TAGS } from './queries/tags';
export { default as GET_CURATED_PRACTICES } from './queries/curatedPractices';
export { default as GET_CONTRIBUTORS } from './queries/contributorCount';
export { default as GET_PRACTICE_COUNT } from './queries/practiceCount';
export { default as GET_PRACTICES_BY_TAG_PAGINATION } from './queries/practicesByTagQueryWithPagination';

// mutations
export { default as CREATE_TAG } from './mutations/createTagMutation';
export { default as DELETE_TAG } from './mutations/deleteTagMutation';
export { default as LIKE_PRACTICE } from './mutations/likePracticeMutation';
export { default as MODIFY_PRACTICE_TAGS } from './mutations/modifyPracticeTagsMutation';
export { default as LOGIN } from './mutations/login';
export { default as UPDATE_PRACTICE } from './mutations/updatePractice';

// cache queries
export { default as currentUserQuery } from './queries/currentUserQuery';
