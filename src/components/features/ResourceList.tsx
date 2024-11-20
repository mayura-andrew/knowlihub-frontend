import React from 'react';
import ResourceCard from '../common/ResourceCard.component';
import { Resource } from '@/types/types';



const ResourceList: React.FC = () => {
  const [resources] = React.useState<Resource[]>([
    {
      id: '1',
      title: 'Complete React Developer Course',
      description: 'Comprehensive React course from basics to advanced concepts',
      author: { 
        id: '1',
        name: 'John Doe', 
        avatar: 'src/assets/web-developer.svg',
        level: 1,
        position: 'Frontend Developer'
      },
      likes: 245,
      comments: 34,
      rating: 4.7,
      tags: ['React', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      saves: 12
    },
    {
      id: '2',
      title: 'Machine Learning with Python',
      description: 'In-depth guide to machine learning algorithms and implementation',
      author: { 
        id: '2',
        name: 'Jane Smith', 
        avatar: 'src/assets/web-developer.svg',
        level: 7,
        position: 'Data Scientist'
      },
      likes: 189,
      comments: 22,
      rating: 4.5,
      tags: ['Python', 'Machine Learning', 'Data Science'],
      category: 'Data Science',
      saves: 8
    },
    {
      id: '3',
      title: 'Complete Node.js Developer Course',
      description: 'Learn to build scalable web applications using Node.js',
      author: {
        id: '3',
        name: 'Alice Johnson',
        avatar: 'src/assets/web-developer.svg',
        level: 3,
        position: 'Full Stack Developer'
      },
      likes: 145,
      comments: 18,
      rating: 4.3,
      tags: ['Node.js', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      saves: 6
    }
    // More resources...
  ]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-6">
        <div className="grid grid-cols-1 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
