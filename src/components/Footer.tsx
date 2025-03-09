
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:py-16 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif font-semibold text-gradient">Portfolio</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Creating exceptional digital experiences with a focus on design, functionality, and user experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-base font-medium">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">About</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Projects</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Services</Link>
              <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Resume</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">Contact</Link>
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-base font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Github" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
