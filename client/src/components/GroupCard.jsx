

// Expanded color palette
const colors = [
  '#2ECC71', // Emerald Green
  '#1ABC9C', // Turquoise
  '#3498DB', // Sky Blue
  '#9B59B6', // Amethyst
  '#34495E', // Dark Slate
  '#E74C3C', // Alizarin
  '#F39C12', // Orange
  '#D35400', // Pumpkin
  '#8E44AD', // Wisteria
  '#2980B9', // Belize Hole
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const GroupCard = ({ title, mood, mainInterest, imageUrl }) => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const randomColor3 = getRandomColor();

  return (
    <div
      className='group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1'
      style={{ borderColor: randomColor1, borderWidth: '2px' }}
    >
      <div className='relative aspect-video'>
        <img
          src={imageUrl}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div
          className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'
          style={{ background: `linear-gradient(to top, ${randomColor2}AA, transparent)` }} // Adds gradient with slight transparency
        ></div>
        <div className='absolute bottom-4 left-4 right-4'>
          <h2 className='text-2xl font-bold text-white mb-2 line-clamp-2'>{title}</h2>
          <span
            className='inline-block text-white text-xs font-semibold px-3 py-1 rounded-full'
            style={{ backgroundColor: randomColor2 }}
          >
            {mood}
          </span>
        </div>
      </div>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <div className='text-sm text-gray-600 dark:text-gray-300'>
            <span className='font-semibold text-gray-800 dark:text-gray-100'></span> {mainInterest}
          </div>
          {/* <div className='text-xs font-medium' style={{ color: randomColor3 }}>
            {mood}
          </div> */}
        </div>
        <button
          className='w-full text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50'
          style={{ backgroundColor: randomColor1 }}
        >
          Join Group
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
