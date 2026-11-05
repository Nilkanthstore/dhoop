import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowLeft, FiUser } from "react-icons/fi";
import { blogsData } from "../data/blogsData";

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = state?.blog || blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-700 mb-4 text-lg">Article not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-2 bg-[#0A1721] text-white rounded-lg hover:bg-blue-900 transition-all duration-300"
        >
          Back to Sacred Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefcf8] text-[#3b191d]">
      {/* Back Button */}
      <div className="px-6 sm:px-10 md:px-16 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#7d1524] text-lg font-semibold hover:text-[#4a0b14] transition-colors cursor-pointer"
        >
          <FiArrowLeft className="mr-2" /> Back to Sacred Blogs
        </button>
      </div>

      {/* Centered Hero Banner */}
      <div className="w-full flex justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/35 bg-white p-2 sm:p-3"
        >
          <img
            src={blog.image}
            alt={`${blog.title} - Shri Nilkanth Dham Natural Dhoop Sticks`}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Title, Date, and Author */}
      <div className="w-full px-6 sm:px-10 md:px-16 mt-12">
        <h1 className="font-cinzel text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-[#4a0b14]">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-[#9e7422] text-sm font-semibold mb-10">
          <span className="flex items-center gap-2">
            <FiCalendar className="text-[#7d1524]" /> {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <FiUser className="text-[#7d1524]" /> {blog.author || "Divine Fragrance Expert"}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full px-6 sm:px-10 md:px-16 pb-24 leading-relaxed"
      >
        <div
          className="prose prose-lg max-w-none prose-headings:font-cinzel prose-headings:text-[#4a0b14] prose-strong:text-[#4a0b14] prose-a:text-[#7d1524] prose-a:underline hover:prose-a:text-[#4a0b14] text-[#4a3538]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
