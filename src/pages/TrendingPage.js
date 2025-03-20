import React, { useEffect, useState } from 'react';
import { getPosts, getComments } from '../services/api';
import TrendingPosts from '../components/TrendingPosts/TrendingPosts';

const TrendingPage = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await getPosts();
        const commentsResponse = await getComments();

        const postCommentCounts = {};
        commentsResponse.data.comments.forEach((comment) => {
          postCommentCounts[comment.postid] = (postCommentCounts[comment.postid] || 0) + 1;
        });

        const maxComments = Math.max(...Object.values(postCommentCounts));
        const trendingPosts = postsResponse.data.posts.filter(
          (post) => postCommentCounts[post.id] === maxComments
        );

        setTrendingPosts(trendingPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Trending Posts</h1>
      <TrendingPosts trendingPosts={trendingPosts} />
    </div>
  );
};

export default TrendingPage;