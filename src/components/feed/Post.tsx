import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/16575637/pexels-photo-16575637/free-photo-of-woman-looking-out-the-restaurant-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">Jack Sparrow</span>
        </div>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      {/* Desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/28119465/pexels-photo-28119465/free-photo-of-street-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-md"
            fill
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          iure porro? Illo id nihil quam, unde nesciunt amet soluta! Id
          consectetur fugiat debitis? Cum, voluptatem ratione deleniti iste
          repellendus obcaecati?
        </p>
      </div>
      {/* Interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              className="cursor-pointer"
              height={16}
              width={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              className="cursor-pointer"
              height={16}
              width={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              className="cursor-pointer"
              height={16}
              width={16}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
