
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter } from 'lucide-react';
import Layout from '@/components/Layout';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  return (
    <Layout>
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
              Portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-gradient leading-tight mb-6"
            >
              My Work
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10"
            >
              Explore a collection of my work across various disciplines, showcasing creativity, technical skill, and attention to detail.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8 overflow-x-auto pb-4 scrollbar-none"
          >
            <Filter size={16} className="mr-2 flex-shrink-0" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`py-1 px-3 text-xs font-medium rounded-full whitespace-nowrap ${
                    filter === category 
                      ? 'bg-foreground text-background' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  } transition-smooth`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

// Mock Data
const projects = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    category: 'web design',
    description: 'A complete redesign of an e-commerce platform focused on user experience and conversion optimization.',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    category: 'ui/ux design',
    description: 'Modern, intuitive mobile banking application designed with security and user experience in mind.',
  },
  {
    id: '3',
    title: 'Brand Identity System',
    category: 'branding',
    description: 'Comprehensive brand identity system including logo, color palette, typography, and guidelines.',
  },
  {
    id: '4',
    title: 'Corporate Website',
    category: 'web design',
    description: 'Professional website for a corporate client, focusing on clear communication and brand representation.',
  },
  {
    id: '5',
    title: 'Product Packaging',
    category: 'branding',
    description: 'Distinctive packaging design for a consumer product, enhancing shelf presence and brand recognition.',
  },
  {
    id: '6',
    title: 'Healthcare Platform',
    category: 'ui/ux design',
    description: 'User-centered design for a healthcare platform, improving patient experience and information accessibility.',
  },
];

export default ProjectsPage;
