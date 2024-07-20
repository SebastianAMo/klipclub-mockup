const posts = [
  {
    id: 1,
    user: {
      name: 'Camilo',
      avatar: 'https://via.placeholder.com/50',
      time: '5 min',
      verified: true,
    },
    content:
      'This was the best performance of the night! The dancers, Choreography, costumes, stage everything! As busy as she is with her tour and then to put this show on... amazing!',
    images: [
      'https://via.placeholder.com/400x190',
      'https://via.placeholder.com/400x190',
      'https://via.placeholder.com/400x190',
    ],
    stats: {
      likes: 20,
      comments: 10000,
      shares: 42,
    },
  },
  {
    id: 2,
    user: {
      name: 'Eleanor Peña',
      avatar: 'https://via.placeholder.com/50',
      time: '10 min',
      verified: true,
    },
    content: 'What an incredible night with Karol G and others!',
    images: [
      'https://via.placeholder.com/400x190',
      'https://via.placeholder.com/400x190',
      'https://via.placeholder.com/400x190',
      'https://via.placeholder.com/400x190',
    ],
    stats: {
      likes: 15,
      comments: 5000,
      shares: 30,
    },
  },
  {
    id: 3,
    user: {
      name: 'Karol G',
      avatar: 'https://via.placeholder.com/50',
      time: '15 min',
      verified: true,
    },
    content: 'Subscribe to my channel for more updates!',
    images: ['https://via.placeholder.com/400x190'],
    stats: {
      likes: 50,
      comments: 20000,
      shares: 100,
    },
  },
];

export const getPosts = () => {
  return posts;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addPost = (post: any) => {
  posts.unshift(post);
};
