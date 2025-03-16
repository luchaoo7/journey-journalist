
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NewPostButton = () => {
  const navigate = useNavigate();
  
  return (
    <Button 
      onClick={() => navigate("/create-post")}
      className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md"
    >
      <PlusCircle className="mr-2 h-4 w-4" />
      New Post
    </Button>
  );
};

export default NewPostButton;
