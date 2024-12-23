import React from 'react';
import groups from '../data/groups.json';
import GroupCard from '../components/Community/GroupCard';

const CommunityPage = () => {
  return (
    <div className='bg-gradient-to-br from-[#A7E6D9] via-[#A3D9A1] to-[#B2E0F8] min-h-screen w-full p-8'>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto'>
        {groups.groups.map((group, index) => (
          <div key={index}>
            <GroupCard 
              id = {group.id}
              title={group.title} 
              mood={group.mood} 
              mainInterest={group.mainInterest} 
              imageUrl={group.imageUrl} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
