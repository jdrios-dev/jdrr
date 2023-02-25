// COLORS: https://colorhunt.co/palette/2c3333395b64a5c9cae7f6f2

import React, { useState } from 'react';
import { items } from '@/utils/data';
import Card from '../ui/Card';
import Editor from './Editor';
import MyConfig from './Config';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Experience from './Experience';
import ContactMe from './ContactMe';
import MyName from '../ui/MyName';

function HomeComponent() {
  const [activeStep, setActiveStep] = useState(items[0]);
  const getComponent = (stepName: string) => {
    switch (stepName) {
      case 'About.tsx':
        return <AboutMe />;
      case 'Skills.tsx':
        return <MySkills />;
      case 'Experience.tsx':
        return <Experience />;
      case 'Contact.tsx':
        return <ContactMe />;
      case 'Config.ts':
        return <MyConfig />;

      default:
        return;
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1200px',
          minHeight: '400px',
          height: 'auto',
        }}
      >
        <Editor activeStep={activeStep} setActiveStep={setActiveStep} />

        <Card title={activeStep.title}>{getComponent(activeStep.name)}</Card>
      </div>
      <MyName />
    </>
  );
}

export default HomeComponent;
