
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostById } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const post = getPostById(id || "");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!post) {
      console.error(`404 Error: Post with id ${id} not found`);
    }
  }, [id, post]);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <article className="container px-4 md:px-6 py-8 md:py-12">
        <Button 
          onClick={() => navigate("/blog")} 
          variant="outline" 
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-6">
              {post.category}
            </div>
          </header>
          
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-10">
            <div className={`absolute inset-0 bg-muted/20 backdrop-blur-sm transition-opacity duration-700 ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`} />
            <img
              src={post.coverImage}
              alt={post.title}
              onLoad={() => setImageLoaded(true)}
              className={`h-full w-full object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <Separator className="my-8" />
            
            <div className="space-y-6">
              <p>
                {post.content}
              </p>
              
              {/* This would be replaced with actual formatted content in a real blog */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              
              <p>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean at eros massa. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              </p>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;
