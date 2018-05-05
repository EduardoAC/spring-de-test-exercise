# spring-de-test-exercise

Interview challenge fetching, merge and display data

## The challenge: "Fetch asynchronous data from an API".

Your task is to write a script or app which gathers data from two endpoints
asynchronously, merges the responses and displays them in any way in the browser.

For example you could use these two endpoints:

* http://jsonplaceholder.typicode.com/users/1 to obtain a user's data
* http://jsonplaceholder.typicode.com/posts?userId=1 to obtain all comments written by that user

## The solution

The problem looks straight forward, we can divide the solution in two parts

1.  We are looking to implement a function that fetch the data from two endpoints
    and merge the responses into an object.
2.  We need to display this combined object into the browser.

Following, this two steps we have a solution that match the requested criteria.

The code will looks like

```
   // Step 1: Fetch and merge data
   function get(url) {
     return fetch(url).then(response => response.json());
   }
   function fetchAndMerge (urlA, urlB) {
     return Promise.all([
       get(urlA),
       get(urlB),
     ]);
   }
   // Step 2: Display on the browser
   const userSectionDOM = document.querySelector('#user-posts');
   const userWithPostsPromise = fetchAndMerge(
     'https://jsonplaceholder.typicode.com/users/1',
     'https://jsonplaceholder.typicode.com/posts?userId=1'
   );

   userWithPostsPromise.then((userWithPosts) => {
     const userPostsElement = renderUserPosts(userWithPosts);
     userSectionDOM.append(userPostsElement);
   });
```

Since there is not any additional requirements for how the data should be render,
it could be as easy as print an idented json on the screen like

```
  function renderUserPosts (userWithPosts) {
    const userJsonParagraph = document.createElement('p');
    const text = JSON.stringify(userWithPosts, null, 2);
    const textNode = document.createTextNode(text);
    userJsonParagraph.appendChild(textNode);
    return userJsonParagraph;
  }
```

but we can go one step further on the solution since looking at the example,
we can see the value of an transform function that will describe how the responses
should be merge.

```
function fetchAndMerge (urlA, urlB, transform) {
  return Promise.all([
    get(urlA),
    get(urlB),
  ]).then(responses => (
    transform && typeof transform === 'function' ? transform(responses) : responses
  ));
}
```
