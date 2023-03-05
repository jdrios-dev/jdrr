import AboutMe from '@/components/pages/AboutMe';
import MyConfig from '@/components/pages/Config';
import ContactMe from '@/components/pages/ContactMe';
import Experience from '@/components/pages/Experience';
import MySkills from '@/components/pages/MySkills';

export type ItemType = {
  name: string;
  code: string[];
  component: () => JSX.Element;
  title: string;
  mobileName: string;
};

export const items: ItemType[] = [
  {
    name: 'About.tsx',
    mobileName: 'About',
    code: [
      "import React from 'react'",
      '　',
      'const AboutMe = (　) => {',
      '　',
      '　return (',
      "　　<Card title='About Me' >",
      '　　　<Text>',
      '　　　　{myDescription}',
      '　　　</Text>',
      '　　</Card>',
      '　)',
      '}',
      '　',
      'export default AboutMe',
      '　',
    ],
    component: AboutMe,
    title: 'ABOUT ME',
  },
  {
    name: 'Skills.tsx',
    mobileName: 'Skills',
    code: [
      "import React from 'react'",
      '　',
      'const MySkills = (　) => {',
      '　',
      '　return (',
      "　　<Card title='My Skills' >",
      '　　　<TechnicalSkills />',
      '　　　<GeneralSkills />',
      '　　</Card>',
      '　)',
      '}',
      '　',
      'export default MySkills',
      '　',
    ],
    component: MySkills,
    title: 'MY SKILLS',
  },

  {
    name: 'Experience.tsx',
    mobileName: 'Experience',
    code: [
      "import React from 'react'",
      "import {workExperience} from 'data.ts'",
      '　',
      'const Experience = (　) => {',
      '　',
      '　return (',
      "　　<Card title='Experience' >",
      '　　　{ workExperience.map(item => {',
      '　　　　<ExperienceCard',
      '　　　　　job={item}',
      '　　　　/>',
      '　　　})}',
      '　　</Card>',
      '　)',
      '}',
      '　',
      'export default Experience',
      '　',
    ],
    component: Experience,
    title: 'EXPERIENCE',
  },
  {
    name: 'Contact.tsx',
    mobileName: 'Contact',
    code: [
      "import React from 'react'",
      '　',
      'const ContactMe = (　) => {',
      '　',
      '　return (',
      "　　<Card title='Contact Me' >",
      '　　　<Text>',
      '　　　　{myDescription}',
      '　　　</Text>',
      '　　　<SocialMediaLinks />',
      '　　</Card>',
      '　)',
      '}',
      '　',
      'export default ContactMe',
      '　',
    ],
    component: ContactMe,
    title: 'CONTACT ME',
  },
  {
    name: 'Config.ts',
    mobileName: 'Config',
    code: [
      "import React from 'react'",
      '　',
      'const MyConfig = (　) => {',
      '　',
      '　return (',
      "　　<Card title='My Config' >",
      '　　　<CustomColor />',
      '　　</Card>',
      '　)',
      '}',
      '　',
      'export default ContactMe',
      '　',
    ],
    component: MyConfig,
    title: 'MY CONFIG',
  },
];
