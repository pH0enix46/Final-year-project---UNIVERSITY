import PropTypes from 'prop-types';

const Loader = ({ size = 'medium', fullScreen = false }) => {
  // Size variants
  const sizeClasses = {
    small: 'h-8 w-8 border-2',
    medium: 'h-16 w-16 border-4',
    large: 'h-24 w-24 border-[6px]'
  };

  // Container classes based on fullScreen prop
  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-[#2f4f4f]/80 backdrop-blur-sm flex items-center justify-center z-50' 
    : 'flex items-center justify-center';

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Main spinner */}
        <div className={`${sizeClasses[size]} rounded-full border-gray-300 border-t-teal-500 animate-spin`}></div>
        
        {/* Overlay spinner for effect */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} rounded-full border-transparent border-r-teal-300 animate-pulse opacity-70`}></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500 animate-pulse">
          <div className={size === 'small' ? 'h-2 w-2' : size === 'medium' ? 'h-3 w-3' : 'h-4 w-4'}></div>
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullScreen: PropTypes.bool
};

export default Loader;
