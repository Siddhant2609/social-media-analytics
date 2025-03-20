import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const TrendingPosts = ({ trendingPosts }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Trending Posts (Most Comments)
      </Typography>
      <List>
        {trendingPosts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText
              primary={post.content}
              secondary={`Post ID: ${post.id}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TrendingPosts;