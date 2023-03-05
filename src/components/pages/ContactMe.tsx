/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import Text from '../ui/Text.component';

const ContactMe = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '16px',
      }}
    >
      <Text>
        Want to chat? I'm just a few clicks away! Connect with me on LinkedIn,
        drop me a line at my email, or take a peek at my GitHub profile. Let's
        make some magic together!
      </Text>
      <SocialLinks />
    </div>
  );
};

export default ContactMe;
