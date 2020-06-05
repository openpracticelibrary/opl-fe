export { default as client } from './client';

// queries
export { default as GET_PRACTICE_ID } from './queries/practiceIdQuery';
export { default as GET_PRACTICE_PAGE } from './queries/practiceContentQuery';
export { default as GET_PRACTICES } from './queries/practices';
export { default as GET_CURATED_PRACTICES } from './queries/curatedPractices';
export { default as GET_CONTRIBUTORS } from './queries/contributorCount';

// mutations
export { default as LIKE_PRACTICE } from './mutations/likePracticeMutation';
