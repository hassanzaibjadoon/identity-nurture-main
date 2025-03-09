
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ExternalLink, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 backdrop-blur-sm" />
          <div 
            className="absolute top-0 left-1/2 w-[1000px] h-[1000px] bg-secondary/30 rounded-full blur-3xl opacity-40 animate-spotlight"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block py-1 px-3 mb-6 text-xs font-medium bg-muted rounded-full"
            >
              Professional Portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient leading-tight mb-6"
            >
              Creating exceptional digital experiences
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
            >
              A showcase of creative work, skills, and services focused on delivering elegant solutions to complex problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/projects" 
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-primary hover:bg-foreground/90 h-11 px-8"
              >
                View Projects <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-foreground/20 bg-transparent hover:bg-muted h-11 px-8"
              >
                Contact Me <MessageSquare size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.a
            href="#featured"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-smooth"
          >
            <span className="text-xs mb-2">Scroll to explore</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.a>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="featured" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              A selection of my most remarkable work, showcasing creativity, technical skill, and problem-solving abilities.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl neo-blur hover:shadow-lg transition-smooth"
              >
                <div className="aspect-video overflow-hidden">
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-muted-foreground block mb-2">{project.category}</span>
                  <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-sm font-medium text-foreground link-underline"
                  >
                    View Case Study <ExternalLink size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/projects" 
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-foreground/20 bg-transparent hover:bg-muted h-11 px-8"
            >
              View All Projects <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-muted-foreground"
            >
              Specialized expertise to help you achieve your goals and create exceptional digital experiences.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl neo-blur hover:shadow-lg transition-smooth"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted mb-6">
                  <service.icon size={20} className="text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-sm font-medium text-foreground link-underline"
                >
                  Learn More <ArrowRight size={14} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-6"
            >
              Ready to create something exceptional?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              Let's collaborate to bring your vision to life. Reach out to discuss your project needs and how we can work together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-primary hover:bg-foreground/90 h-11 px-8"
              >
                Get in Touch <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Mock Data
const featuredProjects = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    category: 'Web Design & Development',
    description: 'A complete redesign of an e-commerce platform focused on user experience and conversion optimization.',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    description: 'Modern, intuitive mobile banking application designed with security and user experience in mind.',
  },
  {
    id: '3',
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Comprehensive brand identity system including logo, color palette, typography, and guidelines.',
  },
];

const services = [
  {
    id: '1',
    title: 'UI/UX Design',
    description: 'Creating intuitive, user-centered designs that enhance user experience and drive engagement.',
    icon: MessageSquare,
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'Building responsive, performant, and accessible websites using modern technologies and best practices.',
    icon: ArrowRight,
  },
  {
    id: '3',
    title: 'Brand Strategy',
    description: 'Developing comprehensive brand strategies that align with business goals and resonate with target audiences.',
    icon: ExternalLink,
  },
];

export default HomePage;
