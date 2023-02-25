import { useEffect, useState } from 'react';
import colors, { NameColors } from '../utils/colors';

const useColor = () => {
  const [customColors, setCustomColors] = useState('retro');

  const changeCustomColor = (theme: NameColors) => {
    setCustomColors(theme);
    localStorage.setItem('theme', theme);
    window.location.reload();
  };

  useEffect(() => {
    const customTheme = localStorage.getItem('theme');
    if (customTheme) {
      setCustomColors(customTheme);
    }
  }, [customColors]);

  return {
    colors: colors[customColors as NameColors],
    changeCustomColor,
  };
};

export default useColor;
