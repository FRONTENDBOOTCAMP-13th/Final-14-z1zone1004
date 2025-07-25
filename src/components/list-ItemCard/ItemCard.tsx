// src/components/ItemCard.tsx
'use client'
import { useState } from 'react';
import {
  ItemCardProvider,
  ItemCardVariant,
} from '@/components/List-ItemCard/ItemCardContext';
import ItemCardImage from '@/components/List-ItemCard/ItemCardImage';
import ItemCardInfo from '@/components/List-ItemCard/ItemCardInfo';
import Link from 'next/link';

interface ItemCardProps {
  variant?: ItemCardVariant;
  className?: string;
}

export default function ItemCard({ variant = 'default', className }: ItemCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  }

  const HeartIcon = ({ className }: { className?: string }) => {
      if (isLiked) {
      // Liked 상태 - filled 하트 (poten-red 색상)
      return (
        <svg 
          width="19" 
          height="19" 
          viewBox="0 0 19 19" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path 
            d="M9.27832 16.7L8.19082 15.71C4.32832 12.2075 1.77832 9.89 1.77832 7.0625C1.77832 4.745 3.59332 2.9375 5.90332 2.9375C7.20832 2.9375 8.46082 3.545 9.27832 4.4975C10.0958 3.545 11.3483 2.9375 12.6533 2.9375C14.9633 2.9375 16.7783 4.745 16.7783 7.0625C16.7783 9.89 14.2283 12.2075 10.3658 15.71L9.27832 16.7Z" 
            fill="#DC2626"
          />
        </svg>
      );
    } else {
      // Unliked 상태 - outline 하트
      return (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path 
            d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" 
            fill="currentColor"
          />
        </svg>
      );
    }
  }

  const getCardStyles = () => {
    switch (variant) {
      case 'detailed':
        return 'w-[336px] md:w-[714px] xl:w-[1200px] flex flex-col mx-auto md:grid md:grid-cols-2 xl:grid-cols-2 xl:pb-34';
      default:
        return 'w-[150px] h-[238px] md:w-[229px] md:h-[310px] xl:w-[282px] xl:h-[350px]';
    }
  };

  const getLikeButtonStyles = () => {
    const baseStyles = 'rounded-md w-[160px] h-[35px] md:w-[183px] md:h-[47px] xl:w-[174px]xl:h-[47px] gap-0.5 flex flex-row justify-center items-center border-1'

    return isLiked
      ? `${baseStyles} text-poten-red border-poten-red`
      : `${baseStyles} text-poten-gray-2 border-poten-gray-2`
  };

  return (
    <ItemCardProvider variant={variant}>
      <section className={`${getCardStyles()} ${className || ''}`}>
        <Link href={'/list/1'}>
          <ItemCardImage />
        </Link>
        <ItemCardInfo />
        <div className="flex gap-2 mt-4 mb-10 md:mt-9 xl:mt-4 md:col-span-2 xl:col-span-2 md:justify-self-end xl:mr-3">
          <button 
            onClick={handleLikeClick}
            className={getLikeButtonStyles()}
          >
            좋아요
            <HeartIcon className='w-[18px] h-[18px] text-poten-gray-2 ml-0.5'/>
          </button>

          <Link href={'/list'} className="bg-poten-red text-white rounded-md font-bold flex justify-center items-center w-[160px] h-[35px] md:w-[183px] md:h-[47px] xl:w-[174px] xl:h-[47px]">
            바로 구매
          </Link>
        </div>
      </section>
    </ItemCardProvider>
  );
}
