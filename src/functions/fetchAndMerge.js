import get from '/utils/get.js';

// Step 1: Fetch and merge data
const fetchAndMerge = (urlA, urlB, transform) => {
  return Promise.all([get(urlA), get(urlB)]).then(
    responses =>
      transform && typeof transform === 'function'
        ? transform(responses)
        : responses,
  );
};

export default fetchAndMerge;
