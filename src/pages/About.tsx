
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Award, Users, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

type MixBlendMode = 
  | 'normal' 
  | 'multiply' 
  | 'screen' 
  | 'overlay' 
  | 'darken' 
  | 'lighten' 
  | 'color-dodge' 
  | 'color-burn' 
  | 'hard-light' 
  | 'soft-light' 
  | 'difference' 
  | 'exclusion' 
  | 'hue' 
  | 'saturation' 
  | 'color' 
  | 'luminosity';

const AboutPage = () => {
  // State for theme
  const { theme } = useTheme();
  // State for team toggle
  const [showTeam, setShowTeam] = useState(false);
  // State for chat bot
  const [showChatBot, setShowChatBot] = useState(false);
  // State for cursor position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Track mouse position for cursor animation
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Cursor variants for framer-motion with proper typing
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: theme === "light" ? "var(--cursor-color)" : "rgba(255, 255, 255, 0.2)",
      mixBlendMode: (theme === "light" ? "normal" : "difference") as MixBlendMode
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: theme === "light" ? "var(--cursor-hover-color)" : "rgba(255, 255, 255, 0.1)",
      mixBlendMode: (theme === "light" ? "normal" : "difference") as MixBlendMode
    }
  };

  // Function to handle cursor hover
  const handleHover = () => setCursorVariant("hover");
  const handleHoverExit = () => setCursorVariant("default");

  return (
    <Layout>
      {/* Custom cursor animation */}
      <motion.div 
        className="custom-cursor hidden md:block"
        variants={cursorVariants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 32,
          width: 32,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999
        }}
      />

      {/* Chat bot toggle button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button 
          onClick={() => setShowChatBot(!showChatBot)}
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          variant="secondary"
          size="icon"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <MessageSquare size={24} />
        </Button>
      </motion.div>

      {/* Chat bot panel */}
      {showChatBot && (
        <motion.div 
          className="fixed bottom-24 right-8 w-80 bg-card rounded-xl shadow-xl z-40 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="p-4 border-b border-border">
            <h3 className="font-medium">Chat Assistant</h3>
          </div>
          <div className="h-80 p-4 overflow-y-auto">
            <div className="text-sm text-muted-foreground">
              How can I help you today? Feel free to ask me about my experience and skills.
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="w-full rounded-full bg-background border border-border px-4 py-2 text-sm"
              />
              <Button size="sm" variant="ghost" className="absolute right-1 top-1">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-muted rounded-full"
            >
              About Me
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              My journey & expertise
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              A passionate professional dedicated to creating exceptional digital experiences through design and innovation.
            </motion.p>

            {/* Team Toggle Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                onClick={() => setShowTeam(!showTeam)} 
                variant="outline" 
                className="flex items-center gap-2 mb-8"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                {showTeam ? <Users size={16} /> : <User size={16} />}
                {showTeam ? "View Individual" : "View Team"}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              {showTeam ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full bg-muted grid grid-cols-2 grid-rows-2 gap-2 p-2"
                >
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div 
                      key={item} 
                      className="bg-background/40 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverExit}
                    >
                      <span className="text-muted-foreground text-sm">Team Member {item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full bg-muted flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverExit}
                >
                  <span className="text-muted-foreground">Profile Image</span>
                </motion.div>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2 
                className="text-3xl font-serif font-bold text-gradient"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                {showTeam ? "Our Story" : "My Story"}
              </motion.h2>
              <div className="space-y-4 text-muted-foreground">
                {showTeam ? (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Our team brings together diverse talents from across the creative industry, with each member contributing unique expertise to our collaborative projects.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Together, we combine technical prowess with design thinking to deliver solutions that exceed expectations and push creative boundaries.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Our collaborative approach ensures that each project benefits from multiple perspectives, resulting in more innovative and comprehensive outcomes.
                    </motion.p>
                  </>
                ) : (
                  <>
                    <p>
                      With over 10 years of experience in the creative industry, I've dedicated my career to solving complex problems through thoughtful design and innovative solutions.
                    </p>
                    <p>
                      My approach combines technical expertise with a deep understanding of user needs, allowing me to create digital experiences that are both beautiful and functional.
                    </p>
                    <p>
                      I believe that great design should be accessible to all and strive to create work that makes a positive impact on the world.
                    </p>
                  </>
                )}
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-medium text-foreground link-underline"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                {showTeam ? "Contact Us" : "Let's Connect"} <ArrowRight size={14} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              {showTeam ? "Our Expertise" : "Skills & Expertise"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              {showTeam ? 
                "Our combined skill set covers all aspects of digital product design and development." :
                "A comprehensive set of skills developed through years of professional experience and continuous learning."
              }
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg neo-blur text-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience & Education Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center text-2xl font-serif font-bold text-gradient mb-8"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                <Briefcase size={20} className="mr-2" /> {showTeam ? "Our Experience" : "Professional Experience"}
              </motion.h2>
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-border/70"
                    whileHover={{ x: 5 }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverExit}
                  >
                    <motion.span 
                      className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-foreground"
                      whileHover={{ scale: 1.2 }}
                    />
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">{item.period}</div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <div className="text-sm font-medium text-muted-foreground">{item.company}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center text-2xl font-serif font-bold text-gradient mb-8"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                <GraduationCap size={20} className="mr-2" /> Education & Certifications
              </motion.h2>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-border/70"
                    whileHover={{ x: 5 }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverExit}
                  >
                    <motion.span 
                      className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-foreground"
                      whileHover={{ scale: 1.2 }}
                    />
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">{item.period}</div>
                      <h3 className="text-lg font-medium">{item.degree}</h3>
                      <div className="text-sm font-medium text-muted-foreground">{item.institution}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center text-3xl font-serif font-bold text-gradient mb-6"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              <Award size={24} className="mr-2" /> {showTeam ? "Team Interests" : "Beyond Work"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              {showTeam ? 
                "Outside of our professional work, our team members pursue various interests and hobbies." :
                "When I'm not designing or coding, here are some things I enjoy."
              }
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl neo-blur"
                whileHover={{ 
                  scale: 1.03, 
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
              >
                <h3 className="text-lg font-medium mb-3">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Mock Data
const skills = [
  'UI/UX Design',
  'Web Development',
  'Brand Strategy',
  'User Research',
  'Wireframing',
  'Prototyping',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Figma',
  'Adobe Creative Suite',
  'Responsive Design',
];

const experience = [
  {
    period: '2019 - Present',
    title: 'Senior UX Designer',
    company: 'Design Studio',
    description: 'Leading design initiatives for major clients, overseeing project teams, and establishing design systems.',
  },
  {
    period: '2016 - 2019',
    title: 'UI/UX Designer',
    company: 'Tech Company',
    description: 'Created user interfaces for web and mobile applications, conducted user research, and developed wireframes and prototypes.',
  },
  {
    period: '2014 - 2016',
    title: 'Web Designer',
    company: 'Digital Agency',
    description: 'Designed responsive websites for clients across various industries, focusing on accessibility and user experience.',
  },
];

const education = [
  {
    period: '2010 - 2014',
    degree: 'Bachelor of Design',
    institution: 'Design University',
    description: 'Specialized in interactive design with a focus on digital products and user experience.',
  },
  {
    period: '2017',
    degree: 'UX Certification',
    institution: 'Design Academy',
    description: 'Advanced certification in user experience methodologies and research techniques.',
  },
  {
    period: '2019',
    degree: 'Front-End Development',
    institution: 'Tech Institute',
    description: 'Professional certification in modern front-end development frameworks and practices.',
  },
];

const interests = [
  {
    title: 'Photography',
    description: 'Exploring the world through a lens, capturing moments, and telling stories through visual imagery.',
  },
  {
    title: 'Travel',
    description: 'Experiencing different cultures, architectural styles, and design approaches from around the world.',
  },
  {
    title: 'Reading',
    description: 'Constantly learning through books on design, psychology, technology, and fiction to gain new perspectives.',
  },
];

export default AboutPage;
