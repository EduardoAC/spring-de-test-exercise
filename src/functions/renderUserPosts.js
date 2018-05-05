// Step 2: Display on the browser
const renderUserPosts = userWithPosts => {
  const userJsonParagraph = document.createElement('code');
  const text = JSON.stringify(userWithPosts, null, 2);
  const textNode = document.createTextNode(text);
  userJsonParagraph.appendChild(textNode);
  return userJsonParagraph;
};

export default renderUserPosts;
