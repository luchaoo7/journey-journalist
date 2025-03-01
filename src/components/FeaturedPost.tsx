
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Post } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden aspect-[4/3]">
          <div className={cn(
            "absolute inset-0 bg-muted/20 backdrop-blur-sm transition-opacity duration-700",
            imageLoaded ? "opacity-0" : "opacity-100"
          )} />
          <img
            src={post.coverImage}
            alt={post.title}
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "h-full w-full object-cover transition-opacity duration-500",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {post.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="pt-4">
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-accent font-medium group"
              >
                Read Latest Post
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
