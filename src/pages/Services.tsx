
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowRight, 
  PencilRuler, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  LayoutGrid, 
  FileCode, 
  Users, 
  BarChart,
  Lightbulb,
  CheckCircle,
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

// Services data
const servicesData = [
  {
    id: "1",
    title: "UI/UX Design",
    icon: <PencilRuler className="h-10 w-10 text-muted-foreground" />,
    description: "Create intuitive, engaging, and accessible user interfaces that delight your users and achieve your business goals.",
    keyPoints: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Interaction Design",
      "Usability Testing & Iteration"
    ],
    features: [
      "User-centered design approach",
      "Cross-platform consistency",
      "Accessibility compliance",
      "Data-driven design decisions"
    ],
    category: "design"
  },
  {
    id: "2",
    title: "Web Design & Development",
    icon: <Globe className="h-10 w-10 text-muted-foreground" />,
    description: "Build beautiful, responsive, and high-performance websites that represent your brand and convert visitors into customers.",
    keyPoints: [
      "Responsive Website Design",
      "Front-end Development",
      "CMS Integration",
      "Performance Optimization"
    ],
    features: [
      "Mobile-first approach",
      "SEO-friendly structure",
      "Fast loading speeds",
      "Secure implementation"
    ],
    category: "development"
  },
  {
    id: "3",
    title: "Mobile App Design",
    icon: <Smartphone className="h-10 w-10 text-muted-foreground" />,
    description: "Design engaging and intuitive mobile applications that provide value and create meaningful experiences for your users.",
    keyPoints: [
      "iOS & Android Design",
      "App UX Architecture",
      "Interactive Prototyping",
      "Design System Creation"
    ],
    features: [
      "Platform-specific guidelines",
      "Gesture-based interactions",
      "Offline-first capabilities",
      "Performance optimization"
    ],
    category: "design"
  },
  {
    id: "4",
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="h-10 w-10 text-muted-foreground" />,
    description: "Create online stores that drive sales, improve customer experience, and scale with your business.",
    keyPoints: [
      "E-commerce UX/UI Design",
      "Shopping Cart Optimization",
      "Payment Gateway Integration",
      "Product Catalog Management"
    ],
    features: [
      "Conversion-focused design",
      "Streamlined checkout process",
      "Product discovery optimization",
      "Mobile commerce support"
    ],
    category: "development"
  },
  {
    id: "5",
    title: "Brand Identity Design",
    icon: <LayoutGrid className="h-10 w-10 text-muted-foreground" />,
    description: "Develop a cohesive and memorable brand identity that communicates your values and connects with your audience.",
    keyPoints: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral",
      "Brand Strategy"
    ],
    features: [
      "Market research & positioning",
      "Consistent visual language",
      "Cross-channel application",
      "Brand story development"
    ],
    category: "design"
  },
  {
    id: "6",
    title: "Front-end Development",
    icon: <FileCode className="h-10 w-10 text-muted-foreground" />,
    description: "Transform designs into responsive, accessible, and performant front-end code that works across devices and browsers.",
    keyPoints: [
      "HTML/CSS/JavaScript",
      "React & Modern Frameworks",
      "Responsive Implementation",
      "Animation & Interaction"
    ],
    features: [
      "Clean, maintainable code",
      "Performance optimization",
      "Accessibility compliance",
      "Cross-browser compatibility"
    ],
    category: "development"
  },
  {
    id: "7",
    title: "UX Research & Strategy",
    icon: <Users className="h-10 w-10 text-muted-foreground" />,
    description: "Understand your users deeply through research, and create strategies that align user needs with business goals.",
    keyPoints: [
      "User Interviews & Testing",
      "Competitive Analysis",
      "Customer Journey Mapping",
      "UX Strategy Development"
    ],
    features: [
      "Data-driven insights",
      "Actionable recommendations",
      "Validated design directions",
      "ROI measurement"
    ],
    category: "strategy"
  },
  {
    id: "8",
    title: "Analytics & Optimization",
    icon: <BarChart className="h-10 w-10 text-muted-foreground" />,
    description: "Improve your digital products continuously based on data, user feedback, and performance metrics.",
    keyPoints: [
      "UX Audits & Assessment",
      "A/B Testing",
      "Conversion Rate Optimization",
      "Performance Analysis"
    ],
    features: [
      "Metrics-driven improvements",
      "User behavior tracking",
      "Incremental enhancements",
      "ROI measurement"
    ],
    category: "strategy"
  }
];

// Process steps data
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business goals, target audience, and requirements through in-depth consultations and research."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Developing a comprehensive plan and approach tailored to your project needs and objectives."
  },
  {
    number: "03",
    title: "Design",
    description: "Creating intuitive, engaging, and visually appealing designs that align with your brand and user expectations."
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust, responsive, and high-performing implementations of the approved designs."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance to ensure everything functions perfectly across devices and browsers."
  },
  {
    number: "06",
    title: "Launch",
    description: "Smooth deployment of your project with ongoing support to ensure successful adoption."
  }
];

// FAQ data
const faqData = [
  {
    question: "What types of projects do you typically work on?",
    answer: "I specialize in digital products including websites, mobile applications, e-commerce platforms, and SaaS interfaces. My experience spans various industries including technology, finance, healthcare, education, and retail."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive mobile app or complex web application could take 3-6 months. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, I offer various maintenance and support packages to ensure your digital product continues to function optimally and evolve with your business needs and user feedback."
  },
  {
    question: "How do you charge for your services?",
    answer: "I offer both project-based pricing and hourly rates depending on the nature of the work. For most client projects, I provide a comprehensive quote based on the project scope after our initial consultation."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Absolutely! I frequently collaborate with in-house teams, providing specialized expertise in UI/UX design, front-end development, or strategic guidance while integrating with your existing workflows."
  },
  {
    question: "Do you offer consultation services?",
    answer: "Yes, I provide UX audits, design system consultations, and strategic advisory services for businesses looking to improve their existing digital products or planning new initiatives."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const navigate = useNavigate();
  
  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeTab);
  
  const handleServiceClick = (id: string) => {
    navigate(`/services/${id}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
            Services & Expertise
          </h1>
          <p className="text-muted-foreground">
            I offer end-to-end digital product design and development services to help businesses 
            create exceptional user experiences that drive results.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="all" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-12"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:flex justify-center">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-6">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service) => (
                <motion.div key={service.id} variants={fadeIn}>
                  <Card 
                    className="h-full flex flex-col cursor-pointer transition-all hover:shadow-md"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {service.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="my-24"
        >
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient mb-4">
              My Process
            </h2>
            <p className="text-muted-foreground">
              A structured approach to deliver consistent results and exceptional quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <span className="text-3xl font-serif font-semibold text-muted-foreground">{step.number}</span>
                    <CardTitle className="text-xl mt-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="my-24"
        >
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Answers to common questions about my services and process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                {faqData.map((faq, index) => (
                  <div key={index}>
                    <div className="py-4">
                      <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                    {index < faqData.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="my-24 max-w-3xl mx-auto text-center"
        >
          <Card className="bg-muted/50">
            <CardContent className="p-8 md:p-12">
              <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how my services can help bring your vision to life and create exceptional experiences for your users.
              </p>
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRight size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
