import React from 'react';
import ResourceCard from '../common/ResourceCard.component';
import { Resource } from '@/types/types';
import User from '../../assets/web-developer.svg';

const ResourceList: React.FC = () => {
  const [resources] = React.useState<Resource[]>([
    {
      id: '1',
      title: 'Complete React Developer Course',
      description: 'Comprehensive React course from basics to advanced concepts',
      date: '2023-10-01',
      author: { 
        id: '1',
        name: 'John Doe', 
        avatar: User,
        level: 1,
        position: 'Frontend Developer'
      },
      likes: 245,
      comments: [
        {
          id: '1',
          author: {
            id: '2',
            name: 'Jane Smith',
            avatar: User,
            position: 'Data Scientist'
          },
          text: 'Great course! Learned a lot.',
          date: '2023-10-01',
        },
        {
          id: '2',
          author: {
            id: '3',
            name: 'Alice Johnson',
            avatar: User,
            position: 'Full Stack Developer'
          },
          text: 'Highly recommend this course.',
          date: '2023-10-02',
        },
        {
          id: '3',
          author: {
            id: '4',
            name: 'Mike Johnson',
            avatar: User,
            position: 'Software Engineer'
          },
          text: 'Excellent course for beginners.',
          date: '2023-10-03',
        }
      ],
      rating: 4.7,
      tags: ['React', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      saves: 12,
      url: 'https://cohere.com/llmu'
    },
    {
      id: '2',
      title: 'Machine Learning with Python',
      description: 'Learn essential algorithms and data structures with a focus on Java implementations, applications, and performance analysis. Part I covers basic data structures, sorting, and searching. Part II explores graph and string algorithms. Offered by Princeton on Coursera.',
      date: '2023-10-02',
      author: { 
        id: '2',
        name: 'Jane Smith', 
        avatar: User,
        level: 7,
        position: 'Data Scientist'
      },
      likes: 189,
      comments: [
        {
          id: '1',
          author: {
            id: '1',
            name: 'John Doe',
            avatar: User,
            position: 'Frontend Developer'
          },
          text: 'Very informative and well-structured.',
          date: '2023-10-03',
        },
      ],
      rating: 4.5,
      tags: ['Python', 'Machine Learning', 'Data Science', 'AI', 'ML'],
      category: 'Data Science',
      saves: 8,
      url: 'https://www.coursera.org/learn/algorithms-part1'
    },
    {
      id: '3',
      title: 'Complete Node.js Developer Course',
      description: 'Learn to build scalable web applications using Node.js',
      date: '2023-10-03',
      author: {
        id: '3',
        name: 'Alice Johnson',
        avatar: User,
        level: 3,
        position: 'Full Stack Developer'
      },
      likes: 145,
      comments: [],
      rating: 4.3,
      tags: ['Node.js', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      saves: 6,
      url: 'https://youtube.com/playlist?list=PLqYmG7hTraZCDxZ44o4p3N5Anz3lLRVZF&si=xCmgak5jd6yTogkq'
    },
    {
      id: '4',
      title: 'Complete Python Bootcamp',
      description: 'Learn Python from scratch with hands-on projects',
      date: '2023-10-04',
      author: {
        id: '4',
        name: 'Mike Johnson',
        avatar: User,
        level: 2,
        position: 'Software Engineer'
      },
      likes: 98,
      comments: [],
      rating: 4.2,
      tags: ['Python', 'Programming', 'Web Development'],
      category: 'Web Development',
      saves: 4,
      url: 'https://youtube.com/playlist?list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&si=WDqB-oVNJC4qmXdI'
    }
  ]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-6 overflow-y-auto h-screen custom-scrollbar">
        <div className="grid grid-cols-1 gap-1">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceList;