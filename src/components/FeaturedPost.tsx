import React from "react";
import featuredImage from "../assets/featuredpostimage.png"

const FeaturedPost: React.FC = () => {
  return (
    <div className="max-w-4xl relative mx-auto mt-8 bg-white dark:bg-black shadow-lg border border-black dark:border-gray-600">
      <div className="absolute -top-4 left-4 tracking-widest bg-white dark:bg-black border border-black dark:border-gray-600 px-6 py-2 text-lg font-semibold text-black dark:text-white">
        FEATURED POST
      </div>
      <div className="relative">
        <img
          src={featuredImage}
          alt="Featured post image"
          className="w-full mt-10 px-4 object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Oct 6, 2024 • 3 min
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Neque porro quisquam est qui dolorem ipsum quia dolor
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          scrambled it to make a type specimen book. It has survived not only
          five centuries...
        </p>
      </div>
    </div>
  );
};

export default FeaturedPost;