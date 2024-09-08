import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full ring-2"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
