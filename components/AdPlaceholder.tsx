
import React from 'react';

interface AdPlaceholderProps {
  type: 'header' | 'sidebar' | 'content' | 'footer';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type, className = "" }) => {
  const styles = {
    header: "w-full h-[90px] flex items-center justify-center bg-gray-100 border border-dashed border-gray-400 text-gray-400 text-sm mb-6",
    sidebar: "hidden lg:flex w-[300px] h-[600px] items-center justify-center bg-gray-100 border border-dashed border-gray-400 text-gray-400 text-sm mx-auto",
    content: "w-full h-[250px] flex items-center justify-center bg-gray-100 border border-dashed border-gray-400 text-gray-400 text-sm my-8",
    footer: "w-full h-[90px] flex items-center justify-center bg-gray-100 border border-dashed border-gray-400 text-gray-400 text-sm mt-8"
  };

  return (
    <div className={`${styles[type]} ${className}`} aria-hidden="true">
      <div className="text-center">
        <p className="font-bold">Advertisement</p>
        <p className="text-xs italic uppercase tracking-widest mt-1">
          {type === 'header' ? '728x90 Responsive' : type === 'sidebar' ? '300x600 Desktop' : 'Responsive Unit'}
        </p>
        {/* <!-- Google AdSense Ad Here --> */}
      </div>
    </div>
  );
};

export default AdPlaceholder;
