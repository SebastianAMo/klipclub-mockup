import { Top5 } from '../types/Top5';

const top5Data: Top5[] = [
  {
    title: 'Trending',
    type: 'trending',
    items: [
      { position: 1, name: 'Karol G', avatar: 'https://via.placeholder.com/50', score: '20k' },
      { position: 2, name: 'Ariana', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 3, name: 'AVICII', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 4, name: 'Shakira', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 5, name: 'Camilo', avatar: 'https://via.placeholder.com/50', score: '200' },
    ],
  },
  {
    title: 'Competitors',
    type: 'competitors',
    items: [
      { position: 1, name: 'Karol G', avatar: 'https://via.placeholder.com/50', score: '20k' },
      { position: 2, name: 'Ariana', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 3, name: 'AVICII', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 4, name: 'Shakira', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 5, name: 'Camilo', avatar: 'https://via.placeholder.com/50', score: '200' },
    ],
  },
  {
    title: 'Private Channels',
    type: 'private-channel',
    items: [
      { position: 1, name: 'Karol G', avatar: 'https://via.placeholder.com/50', score: '20k' },
      { position: 2, name: 'Ariana', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 3, name: 'AVICII', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 4, name: 'Shakira', avatar: 'https://via.placeholder.com/50', score: '200' },
      { position: 5, name: 'Camilo', avatar: 'https://via.placeholder.com/50', score: '200' },
    ],
  },
];

export const getTop5Data = () => {
  return top5Data;
};
