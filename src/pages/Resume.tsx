
import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, BriefcaseBusiness, GraduationCap, Award, Clock } from 'lucide-react';

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

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<string>('experience');
  
  const experienceData = [
    {
      id: 1,
      role: 'Senior UX Designer',
      company: 'Creative Solutions Inc.',
      duration: '2020 - Present',
      description: 'Leading the design of digital products with a focus on user experience. Conducting user research, creating wireframes, prototypes, and delivering high-fidelity designs.',
      achievements: [
        'Redesigned the main product interface, increasing user engagement by 45%',
        'Led a team of 3 junior designers, mentoring and providing guidance',
        'Established design system that increased design consistency and development efficiency'
      ]
    },
    {
      id: 2,
      role: 'UI/UX Designer',
      company: 'Digital Innovations',
      duration: '2017 - 2020',
      description: 'Collaborated with cross-functional teams to create intuitive and engaging user interfaces for web and mobile applications.',
      achievements: [
        'Designed interfaces for 12+ successful product launches',
        'Implemented user testing protocols that improved product usability scores by 30%',
        'Received company-wide recognition for design excellence'
      ]
    },
    {
      id: 3,
      role: 'Graphic Designer',
      company: 'Media Arts Agency',
      duration: '2015 - 2017',
      description: 'Created visual assets for digital and print media campaigns for various clients across industries.',
      achievements: [
        'Designed branding materials for 20+ clients',
        'Developed social media graphics that increased client engagement by 25%',
        'Streamlined asset production workflow, reducing delivery time by 30%'
      ]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: 'Master of Fine Arts in Interactive Design',
      institution: 'Creative Institute of Design',
      duration: '2014 - 2015',
      description: 'Specialized in interactive design with focus on user experience and digital interfaces.',
      achievements: [
        'Graduated with Honors, GPA 3.9/4.0',
        'Master\'s thesis on "Emotional Design in Digital Interfaces" received departmental recognition',
        'Led student design showcase exhibition'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Arts in Visual Communication',
      institution: 'State University',
      duration: '2010 - 2014',
      description: 'Comprehensive program covering graphic design, typography, photography, and digital media.',
      achievements: [
        'Dean\'s List, all semesters',
        'Received Outstanding Student Award (2014)',
        'Completed internship at leading design studio'
      ]
    }
  ];

  const skillsData = {
    design: [
      { name: 'User Interface Design', level: 95 },
      { name: 'User Experience Design', level: 90 },
      { name: 'Wireframing & Prototyping', level: 95 },
      { name: 'Visual Design', level: 90 },
      { name: 'Interaction Design', level: 85 }
    ],
    technical: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe Creative Suite', level: 90 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'JavaScript', level: 70 },
      { name: 'React', level: 65 }
    ],
    soft: [
      { name: 'Project Management', level: 85 },
      { name: 'Team Leadership', level: 80 },
      { name: 'Client Communication', level: 90 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Time Management', level: 80 }
    ]
  };

  const certifications = [
    { name: 'Certified UX Professional', issuer: 'Nielsen Norman Group', year: 2021 },
    { name: 'Interaction Design Foundation Certification', issuer: 'IDF', year: 2020 },
    { name: 'Professional Web Accessibility', issuer: 'W3C', year: 2019 },
    { name: 'Advanced Visual Design', issuer: 'AIGA', year: 2018 }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gradient mb-4">
              Professional Resume
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive overview of my professional experience, education, and skills as a product designer
              and creative professional with a focus on digital experiences.
            </p>
          </div>
          <Button className="mt-6 md:mt-0 flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90">
            <Download size={16} />
            Download Resume PDF
          </Button>
        </motion.div>

        <Tabs 
          defaultValue="experience" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full md:w-auto flex justify-start mb-8 overflow-x-auto pb-2">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <BriefcaseBusiness size={16} />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap size={16} />
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Award size={16} />
              Skills
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Clock size={16} />
              Certifications
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <motion.div
              initial="hidden"
              animate={activeTab === 'experience' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-8"
            >
              {experienceData.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeIn}
                  className="border-b border-border/40 pb-8 last:border-0"
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="text-xl font-medium">{item.role}</h3>
                          <p className="text-lg text-muted-foreground">{item.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-muted px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <motion.div
              initial="hidden"
              animate={activeTab === 'education' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="space-y-8"
            >
              {educationData.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeIn}
                  className="border-b border-border/40 pb-8 last:border-0"
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                        <div>
                          <h3 className="text-xl font-medium">{item.degree}</h3>
                          <p className="text-lg text-muted-foreground">{item.institution}</p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-muted px-3 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Highlights:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <motion.div
              initial="hidden"
              animate={activeTab === 'skills' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-6">Design Skills</h3>
                    <div className="space-y-5">
                      {skillsData.design.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground/80 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
                    <div className="space-y-5">
                      {skillsData.technical.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground/80 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-6">Soft Skills</h3>
                    <div className="space-y-5">
                      {skillsData.soft.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground/80 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <motion.div
              initial="hidden"
              animate={activeTab === 'certifications' ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="flex flex-col h-full p-6">
                      <Award className="h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">{cert.name}</h3>
                      <div className="mt-auto space-y-1 pt-4">
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-sm font-medium">{cert.year}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
