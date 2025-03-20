import React, { useEffect, useState } from 'react';
import { getUsers, getPosts } from '../services/api';
import TopUsers from '../components/TopUsers/TopUsers';

const HomePage = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getUsers();
        const postsResponse = await getPosts();

        const userPostCounts = {};
        postsResponse.data.posts.forEach((post) => {
          userPostCounts[post.userid] = (userPostCounts[post.userid] || 0) + 1;
        });

        const topUsers = Object.keys(userPostCounts)
          .sort((a, b) => userPostCounts[b] - userPostCounts[a])
          .slice(0, 5)
          .map((userId) => ({
            id: userId,
            name: usersResponse.data.users[userId],
            postCount: userPostCounts[userId],
          }));

        setTopUsers(topUsers);
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
      <h1>Top Users</h1>
      <TopUsers topUsers={topUsers} />
    </div>
  );
};

export default HomePage;