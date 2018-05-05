// Step 1: Fetch and merge data
function get(url) {
  return fetch(url).then(response => response.json());
}
function fetchAndMerge(urlA, urlB, transform) {
  return Promise.all([get(urlA), get(urlB)]).then(
    responses =>
      transform && typeof transform === 'function'
        ? transform(responses)
        : responses,
  );
}
// Step 2: Display on the browser
function renderUserPosts(userWithPosts) {
  const userJsonParagraph = document.createElement('p');
  const text = JSON.stringify(userWithPosts, null, 2);
  const textNode = document.createTextNode(text);
  userJsonParagraph.appendChild(textNode);
  return userJsonParagraph;
}

const userSectionDOM = document.querySelector('#user-posts');
const userWithPostsPromise = fetchAndMerge(
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/posts?userId=1',
);

userWithPostsPromise.then(userWithPosts => {
  const userPostsElement = renderUserPosts(userWithPosts);
  userSectionDOM.append(userPostsElement);
});
