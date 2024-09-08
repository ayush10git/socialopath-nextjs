import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src="https://images.pexels.com/photos/16575637/pexels-photo-16575637/free-photo-of-woman-looking-out-the-restaurant-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      {/* Post */}
      <div className="flex-1">
        {/* Text Input */}
        <form action="" className="flex gap-4">
          <textarea
            name="desc"
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2 outline-none"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer"
            width={20}
            height={20}
          />
        </form>
        {/* Post Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addimage.png"
              alt=""
              className="w-5 h-5 cursor-pointer"
              width={20}
              height={20}
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt=""
              className="w-5 h-5 cursor-pointer"
              width={20}
              height={20}
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image
              src="/poll.png"
              alt=""
              className="w-5 h-5 cursor-pointer"
              width={20}
              height={20}
            />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt=""
              className="w-5 h-5 cursor-pointer"
              width={20}
              height={20}
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
