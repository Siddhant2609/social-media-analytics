// Helper function to sort users by post count in descending order
export const sortUsersByPostCount = (users, posts) => {
    const userPostCounts = {};
    posts.forEach((post) => {
      userPostCounts[post.userid] = (userPostCounts[post.userid] || 0) + 1;
    });
  
    return Object.keys(userPostCounts)
      .sort((a, b) => userPostCounts[b] - userPostCounts[a])
      .slice(0, 5) // Top 5 users
      .map((userId) => ({
        id: userId,
        name: users[userId],
        postCount: userPostCounts[userId],
      }));
  };
  
  // Helper function to find trending posts (posts with the most comments)
  export const findTrendingPosts = (posts, comments) => {
    const postCommentCounts = {};
    comments.forEach((comment) => {
      postCommentCounts[comment.postid] = (postCommentCounts[comment.postid] || 0) + 1;
    });
  
    const maxComments = Math.max(...Object.values(postCommentCounts));
    return posts.filter((post) => postCommentCounts[post.id] === maxComments);
  };
  
  // Helper function to sort posts by date (newest first)
  export const sortPostsByDate = (posts) => {
    return posts.reverse(); // Assuming posts are already sorted by date in ascending order
  };