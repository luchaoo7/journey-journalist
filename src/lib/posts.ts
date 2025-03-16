
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Finding Serenity in the Mountains of Switzerland",
    excerpt: "My journey through the Swiss Alps and the unexpected lessons I learned about myself and life along the way.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    coverImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    date: "May 15, 2023",
    category: "Travel",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "The Art of Slow Living: Lessons from Japan",
    excerpt: "How my time in Kyoto transformed my perspective on mindfulness and intentional living in our fast-paced world.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    date: "June 3, 2023",
    category: "Lifestyle",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "Overcoming Fear: My First Solo Backpacking Adventure",
    excerpt: "How stepping out of my comfort zone in Southeast Asia helped me conquer my anxieties and discover new strengths.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    date: "July 21, 2023",
    category: "Personal Growth",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "The Healing Power of Ocean Waves",
    excerpt: "My reflections on how the rhythmic nature of the sea became a metaphor for resilience during difficult times.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    coverImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    date: "August 15, 2023",
    category: "Reflection",
    readTime: "4 min read"
  },
  {
    id: "5",
    title: "Finding Beauty in Unexpected Places",
    excerpt: "How I learned to appreciate the small, overlooked moments and hidden gems during my travels across continents.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    coverImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    date: "September 8, 2023",
    category: "Travel",
    readTime: "8 min read"
  }
];

export const getLatestPost = (): Post => {
  return posts[0];
};

export const getRecentPosts = (count: number = 3): Post[] => {
  return posts.slice(0, count);
};

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

// New function to add a post
export const addNewPost = (postData: Omit<Post, "id">): string => {
  // Generate new ID (in a real app, this would be handled by the backend)
  const newId = (posts.length + 1).toString();
  
  // Create new post object
  const newPost: Post = {
    id: newId,
    ...postData
  };
  
  // Add to beginning of posts array so it appears as the most recent
  posts.unshift(newPost);
  
  return newId;
};
