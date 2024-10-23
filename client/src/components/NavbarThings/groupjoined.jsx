import joinedgrps from '../../data/joinedgrps.json';

const GroupsJoined = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#A7E6D9] via-[#A3D9A1] to-[#B2E0F8] p-6">
            <h2 className="text-3xl font-bold text-[#34495E] mb-6 text-center">Joined Groups</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {joinedgrps.map((group, index) => (
                    <li key={group.id} className={`shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl border-t-4 ${
                        index % 5 === 0 ? 'bg-[#2ECC71] text-white' :
                        index % 5 === 1 ? 'bg-[#1ABC9C] text-white' :
                        index % 5 === 2 ? 'bg-[#3498DB] text-white' :
                        index % 5 === 3 ? 'bg-[#9B59B6] text-white' :
                        'bg-[#34495E] text-white'
                    }`}>
                        <h3 className="text-2xl font-semibold mb-2">{group.name}</h3>
                        <p className="text-gray-200">{group.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GroupsJoined;