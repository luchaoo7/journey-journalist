
import { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all card-hover",
        featured ? "md:col-span-2" : ""
      )}
    >
      <Link to={`/blog/${post.id}`} className="block h-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <div className={cn(
            "absolute inset-0 bg-muted/20 backdrop-blur-sm transition-opacity duration-700",
            imageLoaded ? "opacity-0" : "opacity-100"
          )} />
          <img
            src={post.coverImage}
            alt={post.title}
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "h-full w-full object-cover transition-all duration-500 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/90 text-white rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className={cn(
            "font-semibold tracking-tight mb-2 transition-colors group-hover:text-accent",
            featured ? "text-2xl" : "text-xl"
          )}>
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
