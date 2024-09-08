import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between w-full bg-slate-100 rounded-xl text-sm px-6 py-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="https://images.pexels.com/photos/27116945/pexels-photo-27116945/free-photo-of-a-narrow-alleyway-with-blue-and-white-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          {/* Desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Brienne Spencer</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              sit quasi unde?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* Icon */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
