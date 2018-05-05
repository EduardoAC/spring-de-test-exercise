import fetchAndMerge from '/functions/fetchAndMerge.js';
import renderUserPosts from '/functions/renderUserPosts.js';

const userSectionDOM = document.querySelector('#user-posts');
const userWithPostsPromise = fetchAndMerge(
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/posts?userId=1',
  responses => ({ ...responses[0], posts: responses[1] }),
);

userWithPostsPromise.then(userWithPosts => {
  const userPostsElement = renderUserPosts(userWithPosts);
  userSectionDOM.append(userPostsElement);
});
