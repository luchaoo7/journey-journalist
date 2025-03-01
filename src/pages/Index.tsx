
import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import FeaturedPost from "@/components/FeaturedPost";
import { getLatestPost, getRecentPosts } from "@/lib/posts";

const Index = () => {
  const latestPost = getLatestPost();
  const recentPosts = getRecentPosts(3).filter(post => post.id !== latestPost.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen">
      <Hero />
      
      <FeaturedPost post={latestPost} />
      
      <section className="container px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold">Recent Stories</h2>
          <a href="/blog" className="text-accent font-medium link-underline mt-2 md:mt-0">
            View all stories
          </a>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {recentPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      <section className="container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to My Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get notified when I publish new stories and travel updates. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-accent text-accent-foreground font-medium transition-all hover:opacity-90 hover:shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
