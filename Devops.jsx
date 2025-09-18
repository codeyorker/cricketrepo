import React, { useState } from 'react';
import { Button } from "/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";

const FreelanceDevOpsWebsite = () => {
  const [activeSection, setActiveSection] = useState('services');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">DevOps & Cloud</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'services' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('expertise')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'expertise' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contact' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Contact
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="md:hidden">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                DevOps & Cloud
                <br />
                <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I help businesses build, automate, and scale their infrastructure to ensure reliable deployments, 
                smooth operations, and high availability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')}>
                  View Services
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Modern%20cloud%20infrastructure%20with%20server%20racks%20and%20network%20diagrams%20showing%20connectivity&id=hero-infrastructure" 
                alt="Modern cloud infrastructure visualization with interconnected servers and network architecture" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Services Offered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive DevOps and Cloud solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=CI%2FCD%20pipeline%20icon%20showing%20automated%20deployment%20process&id=service-cicd" 
                    alt="CI/CD pipeline automation icon" 
                    className="w-12 h-12"
                  />
                  CI/CD Pipeline Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated deployment pipelines for continuous integration and delivery, ensuring fast and reliable software releases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Cloud%20infrastructure%20icon%20with%20AWS%20and%20Azure%20logos&id=service-cloud" 
                    alt="Cloud infrastructure management icon" 
                    className="w-12 h-12"
                  />
                  Cloud Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Design and implementation of scalable cloud infrastructure on AWS and Azure platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Container%20orchestration%20icon%20with%20Docker%20and%20Kubernetes&id=service-containers" 
                    alt="Container orchestration and management icon" 
                    className="w-12 h-12"
                  />
                  Containerization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Docker container setup and Kubernetes orchestration for scalable application deployment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Infrastructure%20as%20Code%20icon%20with%20Terraform%20and%20Ansible&id=service-iac" 
                    alt="Infrastructure as Code automation icon" 
                    className="w-12 h-12"
                  />
                  Infrastructure as Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated infrastructure provisioning using Terraform and configuration management with Ansible.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Server%20configuration%20icon%20for%20Linux%20and%20Windows&id=service-servers" 
                    alt="Server configuration and management icon" 
                    className="w-12 h-12"
                  />
                  Server Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert configuration and maintenance of Linux and Windows Server environments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Monitoring%20and%20logging%20dashboard%20icon&id=service-monitoring" 
                    alt="Monitoring and logging solutions icon" 
                    className="w-12 h-12"
                  />
                  Monitoring & Logging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive monitoring solutions and centralized logging for proactive system management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 2 years of hands-on experience in IT and cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Cloud Platforms</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Amazon%20Web%20Services%20AWS%20logo%20and%20cloud%20services&id=expertise-aws" 
                    alt="Amazon Web Services AWS cloud platform" 
                    className="w-16 h-16"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Amazon Web Services (AWS)</h4>
                    <p className="text-muted-foreground">EC2, S3, RDS, Lambda, and more</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/64x64?prompt=Microsoft%20Azure%20logo%20and%20cloud%20services&id=expertise-azure" 
                    alt="Microsoft Azure cloud platform" 
                    className="w-16 h-16"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Microsoft Azure</h4>
                    <p className="text-muted-foreground">Virtual Machines, App Services, SQL Database</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">DevOps Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Docker%20container%20logo%20and%20icon&id=tool-docker" 
                    alt="Docker container platform" 
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <span className="font-medium text-foreground">Docker</span>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Kubernetes%20logo%20and%20orchestration%20icon&id=tool-kubernetes" 
                    alt="Kubernetes container orchestration" 
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <span className="font-medium text-foreground">Kubernetes</span>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Jenkins%20automation%20server%20logo&id=tool-jenkins" 
                    alt="Jenkins automation server" 
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <span className="font-medium text-foreground">Jenkins</span>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Ansible%20automation%20tool%20logo&id=tool-ansible" 
                    alt="Ansible configuration management" 
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <span className="font-medium text-foreground">Ansible</span>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Terraform%20Infrastructure%20as%20Code%20logo&id=tool-terraform" 
                    alt="Terraform Infrastructure as Code" 
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <span className="font-medium text-foreground">Terraform</span>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <img 
                    src="https://placeholder-image-service.onrender.com/image/48x48?prompt=Git%20version%20control%20logo&id=tool-git" 
                    alt="Git version control system" 
                    className="w-12 h-12 mx-auto mb-2"
                  />
                  <span className="font-medium text-foreground">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how I can help you build a robust, scalable infrastructure for your business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-background text-foreground">
                <CardHeader>
                  <CardTitle>Project Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Free initial consultation to discuss your project requirements and goals.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-background text-foreground">
                <CardHeader>
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Typically respond within 24 hours to new inquiries and project requests.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background p-8 rounded-lg text-foreground">
              <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
              <div className="grid gap-4">
                <div className="text-center">
                  <p className="font-semibold mb-2">Email</p>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold mb-2">Availability</p>
                  <p className="text-muted-foreground">Available for freelance projects</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 text-muted-foreground">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 DevOps & Cloud Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FreelanceDevOpsWebsite;
