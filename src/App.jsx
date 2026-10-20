import React from 'react';
import { portfolioData } from './portfolioData';
import { MainLayout } from './components/layouts/MainLayout';
import { Navbar } from './components/organisms/Navbar';
import { AboutMeSection } from './components/organisms/AboutMeSection';
import { ExperienceSection } from './components/organisms/ExperienceSection';
import { EducationSection } from './components/organisms/EducationSection';
import { ProjectsSection } from './components/organisms/ProjectsSection';
import { ContactForm } from './components/organisms/ContactForm';
import { Footer } from './components/organisms/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <AboutMeSection personal={portfolioData.personal} />
        <ExperienceSection experiences={portfolioData.experience} />
        <EducationSection education={portfolioData.education} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactForm contact={portfolioData.contact} />
        <Footer email={portfolioData.contact.email} />
      </MainLayout>
    </>
  );
}

export default App;