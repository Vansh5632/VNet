const joinedGroupsData = [
    { id: 1, name: 'Web Developers', description: 'A group for web enthusiasts' },
    { id: 2, name: 'AI/ML Enthusiasts', description: 'Exploring the world of machine learning' },
    { id: 3, name: 'Tech Innovators', description: 'Discuss latest trends in technology' },
];

const GroupsJoined = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Joined Groups</h2>
            <ul>
                {joinedGroupsData.map((group) => (
                    <li key={group.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h3 className="text-xl font-medium text-gray-800">{group.name}</h3>
                        <p className="text-gray-600">{group.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GroupsJoined;


