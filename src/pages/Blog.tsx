
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PostCard from "@/components/PostCard";
import { posts, Post } from "@/lib/posts";

const Blog = () => {
  const [filter, setFilter] = useState<string>("All");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  
  const categories = ["All", ...new Set(posts.map(post => post.category))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === filter));
    }
  }, [filter]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto mb-12 md:mb-20 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
            My Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Exploring Life Through Words
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of experiences, reflections, and lessons from my journey through life and across the world.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
