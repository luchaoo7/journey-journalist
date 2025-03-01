
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            The Story Behind My Journey
          </h1>
          <p className="text-lg text-muted-foreground">
            I'm passionate about exploring the world, documenting my experiences, and sharing the lessons I've learned along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Hello, I'm [Your Name]
              </h2>
              <p className="text-muted-foreground">
                I've always been fascinated by the world around me, driven by an insatiable curiosity about different cultures, perspectives, and ways of living. My journey began five years ago when I left my corporate job to pursue a life of meaningful experiences and personal growth.
              </p>
              <p className="text-muted-foreground">
                Through my travels across 25 countries and countless life challenges, I've gathered stories that I believe are worth sharing. Each experience has shaped who I am today and provided valuable lessons about resilience, connection, and finding joy in the unexpected.
              </p>
              <p className="text-muted-foreground">
                This platform is where I document these experiences—not just the picture-perfect moments, but the real, raw, and transformative ones too. I hope my stories inspire you to seek your own adventures and embrace the fullness of your journey.
              </p>
            </div>
          </motion.div>
        </div>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl bg-card text-card-foreground"
            >
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-muted-foreground">
                I believe in sharing genuine experiences, including both triumphs and struggles, to connect with others on a deeper level.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl bg-card text-card-foreground"
            >
              <h3 className="text-xl font-semibold mb-3">Curiosity</h3>
              <p className="text-muted-foreground">
                Approaching life with an open mind allows me to discover new perspectives and continuously grow as a person.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl bg-card text-card-foreground"
            >
              <h3 className="text-xl font-semibold mb-3">Connection</h3>
              <p className="text-muted-foreground">
                Building relationships and fostering understanding across cultures is at the heart of my journey.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
