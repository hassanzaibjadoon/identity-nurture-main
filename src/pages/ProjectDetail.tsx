
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Users, 
  Globe,
  Layers,
  ListChecks,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Mock data for the project detail
const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    client: "Fashion Retailer",
    date: "2023",
    category: "UX/UI Design",
    tags: ["E-commerce", "Mobile App", "Web Design"],
    description: "Complete redesign of an e-commerce platform focusing on improving user experience, increasing conversion rates, and modernizing the visual identity.",
    challenge: "The client's existing platform suffered from poor navigation, inconsistent user experience across devices, and low conversion rates. The challenge was to redesign the entire platform while maintaining brand recognition and improving key metrics.",
    solution: "I developed a comprehensive design strategy focusing on user-centered design principles. Starting with extensive user research and competitive analysis, I created a streamlined information architecture and user flow. The new design features an intuitive navigation system, optimized product pages, and a simplified checkout process.",
    results: [
      "42% increase in conversion rate within 3 months after launch",
      "65% reduction in cart abandonment rate",
      "28% increase in average session duration",
      "User satisfaction score improved from 3.2/5 to 4.7/5"
    ],
    process: [
      {
        phase: "Research & Discovery",
        description: "Conducted user interviews, surveys, and competitive analysis to understand pain points and opportunities.",
        deliverables: ["User Personas", "Journey Maps", "Competitive Analysis Report"]
      },
      {
        phase: "UX Design",
        description: "Developed information architecture, user flows, and wireframes to establish the foundation of the new design.",
        deliverables: ["Information Architecture", "User Flows", "Low-fidelity Wireframes"]
      },
      {
        phase: "UI Design",
        description: "Created visual design system, high-fidelity mockups, and interactive prototypes.",
        deliverables: ["Design System", "High-fidelity Mockups", "Interactive Prototypes"]
      },
      {
        phase: "Testing & Iteration",
        description: "Conducted usability testing and iterated on the design based on feedback.",
        deliverables: ["Usability Test Results", "Iteration Documentation", "Final Design Specifications"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "E-Commerce Platform Redesign Preview",
    link: "https://example.com/project1"
  },
  {
    id: "2",
    title: "Financial Services Mobile Application",
    client: "Banking Corporation",
    date: "2022",
    category: "Mobile App Design",
    tags: ["Finance", "Mobile App", "User Experience"],
    description: "Design of a mobile banking application focused on simplifying financial management for users while ensuring security and compliance with financial regulations.",
    challenge: "The client wanted to modernize their digital offerings with a mobile app that would appeal to younger demographics while not alienating their traditional customer base. They needed a secure, intuitive interface that would handle complex financial transactions while remaining accessible.",
    solution: "I designed a clean, accessible interface that guides users through financial tasks with clear visual hierarchies and progressive disclosure of complex features. Security features were integrated seamlessly into the user experience without creating friction.",
    results: [
      "Over 100,000 downloads in the first month of launch",
      "Average rating of 4.8/5 stars on app stores",
      "User engagement 35% higher than industry average",
      "38% of users reported using the app daily"
    ],
    process: [
      {
        phase: "Research & Strategy",
        description: "Conducted market research, user interviews, and analyzed competitor apps to identify opportunities and constraints.",
        deliverables: ["Market Research Report", "User Needs Assessment", "Strategic Recommendations"]
      },
      {
        phase: "UX Design",
        description: "Created information architecture, user flows, and wireframes for key banking features.",
        deliverables: ["User Flows", "Wireframes", "Navigation Structure"]
      },
      {
        phase: "UI Design",
        description: "Developed visual design system, high-fidelity screens, and interactive prototypes.",
        deliverables: ["UI Style Guide", "Screen Designs", "Interactive Prototype"]
      },
      {
        phase: "Testing & Refinement",
        description: "Conducted usability testing with diverse user groups and refined the design based on feedback.",
        deliverables: ["Usability Test Results", "Design Iterations", "Final Design Assets"]
      }
    ],
    imageSrc: "/placeholder.svg",
    imageAlt: "Financial Services Mobile Application Preview",
    link: "https://example.com/project2"
  }
];

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<typeof projectsData[0] | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  useEffect(() => {
    // In a real app, this would be a data fetch from an API
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject);
    // If project isn't found, you could redirect to a 404 page
  }, [id]);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-6 md:px-12 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
            Project Not Found
          </h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-smooth"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to All Projects
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient">
              {project.title}
            </h1>
            
            <Button asChild variant="outline" className="self-start">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                View Live Project
              </a>
            </Button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:col-span-2"
          >
            <motion.div variants={fadeIn} className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={project.imageSrc} 
                alt={project.imageAlt} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <Tabs 
              defaultValue="overview" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full md:w-auto flex justify-start mb-8 overflow-x-auto pb-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <motion.div
                  initial="hidden"
                  animate={activeTab === 'overview' ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-serif font-semibold mb-4">Project Overview</h2>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium mb-4">The Challenge</h3>
                          <p className="text-muted-foreground">
                            {project.challenge}
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium mb-4">The Solution</h3>
                          <p className="text-muted-foreground">
                            {project.solution}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="process">
                <motion.div
                  initial="hidden"
                  animate={activeTab === 'process' ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-serif font-semibold mb-6">Design Process</h2>
                    <div className="space-y-8">
                      {project.process.map((phase, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mt-1">
                                <span className="font-medium text-sm">{index + 1}</span>
                              </div>
                              <div>
                                <h3 className="text-xl font-medium mb-2">{phase.phase}</h3>
                                <p className="text-muted-foreground mb-4">
                                  {phase.description}
                                </p>
                                
                                <h4 className="text-sm font-medium mb-2">Deliverables:</h4>
                                <ul className="list-disc pl-5">
                                  {phase.deliverables.map((deliverable, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground mb-1">
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="results">
                <motion.div
                  initial="hidden"
                  animate={activeTab === 'results' ? 'visible' : 'hidden'}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  <motion.div variants={fadeIn}>
                    <h2 className="text-2xl font-serif font-semibold mb-6">Results & Impact</h2>
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-6">
                          The final solution delivered exceptional results for the client, meeting and exceeding the initial objectives.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xl font-medium mb-4">Key Outcomes</h3>
                            <ul className="space-y-3">
                              {project.results.map((result, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 mt-1 text-foreground">
                                    <ListChecks size={18} />
                                  </div>
                                  <span className="text-muted-foreground">
                                    {result}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-medium mb-4">Testimonial</h3>
                            <div className="bg-muted p-4 rounded-lg">
                              <p className="italic text-muted-foreground mb-4">
                                "The solution exceeded our expectations. Not only did it solve our immediate challenges, but it also set us up for future growth and digital transformation."
                              </p>
                              <p className="text-sm font-medium">— Client Representative</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:col-span-1"
          >
            <motion.div variants={fadeIn}>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-medium">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Layers size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="font-medium">{project.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe size={18} className="text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Website</p>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium hover:underline flex items-center gap-1"
                        >
                          View Site
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-1.5 bg-muted px-3 py-1 rounded-full text-xs font-medium"
                      >
                        <Tag size={12} />
                        {tag}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-serif font-semibold mb-6">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how my design services can help your next project succeed.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
