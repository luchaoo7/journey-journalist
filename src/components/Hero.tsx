
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0" />
      
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
              Welcome to my journey
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6">
            Exploring Life Through Travel, Challenges, and Personal Growth
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join me as I share my experiences, reflections, and the moments that have shaped who I am today. From breathtaking destinations to life's unexpected turns.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blog"
              className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium transition-all hover:opacity-90 hover:shadow-md flex items-center group"
            >
              Read My Stories
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80"
            >
              About Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
