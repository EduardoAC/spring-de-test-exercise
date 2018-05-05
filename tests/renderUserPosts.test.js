import renderUserPosts from '../src/functions/renderUserPosts';

// Currently jest does not provide way to initialize data on BeforeAll
let mockData = [{ id: 'userId' }, [{ id: 'postId1' }]];

describe('renderUserPosts', () => {
  it('returns dom element', () => {
    const userPostsDomEl = renderUserPosts(mockData);
    expect(userPostsDomEl.tagName).toBe('CODE');
  });
  it('renders as text the parameter passed', () => {
    const userPostsDomEl = renderUserPosts(mockData);
    const text = JSON.stringify(mockData, null, 2);
    expect(userPostsDomEl.innerHTML).toBe(text);
  });
});
