import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center font-medium text-gray-500">
        <span className="text-gray-500">Sponsored</span>
        <Image src="/more.png" alt="" width={15} height={15} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full h-36 ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/12128635/pexels-photo-12128635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/12128635/pexels-photo-12128635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />

          <span className="text-blue-500 font-medium">Sprie Art Gallery</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vel. Saepe magni vitae quod expedita."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita explicabo qui, veritatis sapiente officiis repudiandae libero, nostrum consectetur suscipit eligendi architecto ipsum ipsa exercitationem."
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero non fugit, dolores ipsa, voluptas in, rerum repellendus minima explicabo ex quis recusandae cumque veniam illo. Sunt, saepe? Quasi nostrum modi tempore veritatis? Eligendi, libero dolore."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
      </div>
    </div>
  );
};

export default Ad;
