
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, Image as ImageIcon, BookText, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { addNewPost } from "@/lib/posts";

const CreatePost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [post, setPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
    category: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form
      if (!post.title || !post.excerpt || !post.content || !post.coverImage || !post.category) {
        toast({
          title: "Missing fields",
          description: "Please fill in all the required fields",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Add new post
      const newPostId = addNewPost({
        ...post,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: `${Math.max(1, Math.ceil(post.content.length / 1000))} min read`,
      });
      
      toast({
        title: "Post created!",
        description: "Your blog post has been published successfully.",
      });
      
      // Redirect to the new post
      navigate(`/blog/${newPostId}`);
    } catch (error) {
      console.error("Error creating post:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to create your post. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <Button 
          onClick={() => navigate("/blog")} 
          variant="outline" 
          className="mb-8"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-3xl">Create New Blog Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-accent" />
                    <label htmlFor="title" className="text-sm font-medium">
                      Post Title
                    </label>
                  </div>
                  <Input
                    id="title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Enter an engaging title"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <BookText className="mr-2 h-4 w-4 text-accent" />
                    <label htmlFor="excerpt" className="text-sm font-medium">
                      Post Excerpt
                    </label>
                  </div>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={post.excerpt}
                    onChange={handleChange}
                    placeholder="Write a brief summary of your post"
                    className="min-h-[80px] w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ImageIcon className="mr-2 h-4 w-4 text-accent" />
                    <label htmlFor="coverImage" className="text-sm font-medium">
                      Cover Image URL
                    </label>
                  </div>
                  <Input
                    id="coverImage"
                    name="coverImage"
                    value={post.coverImage}
                    onChange={handleChange}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the URL of an image from Unsplash or another source.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-accent" />
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                  </div>
                  <Input
                    id="category"
                    name="category"
                    value={post.category}
                    onChange={handleChange}
                    placeholder="E.g., Travel, Personal Growth, Reflection"
                    className="w-full"
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <label htmlFor="content" className="text-sm font-medium">
                    Post Content
                  </label>
                  <Textarea
                    id="content"
                    name="content"
                    value={post.content}
                    onChange={handleChange}
                    placeholder="Write your blog post content here..."
                    className="min-h-[300px] w-full"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isSubmitting ? "Publishing..." : "Publish Post"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default CreatePost;
