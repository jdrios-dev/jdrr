import GithubSquare from '@/assets/GithubSquare';
import useColor from '@/hooks/useColor';
import React from 'react';
import EmailSquare from '../../assets/EmailSquare';
import LinkedInSquare from '../../assets/LinkedInSquare';

const SocialLinks = () => {
  const { colors } = useColor();
  return (
    <div
      style={{
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
      }}
    >
      <a
        href="https://www.linkedin.com/in/jdriosdev/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInSquare color={colors.light} />
      </a>
      <a href="mailto:jd.rios.dev@gmail.com" target="_blank" rel="noreferrer">
        <EmailSquare color={colors.light} />
      </a>
      <a href="https://github.com/jdrios-dev" target="_blank" rel="noreferrer">
        <GithubSquare color={colors.light} />
      </a>
    </div>
  );
};

export default SocialLinks;
