import React from 'react';
import LottieView from 'lottie-react-native';

interface LogoProps {
  height: number;
  width: number;
}

const Logo: React.FC<LogoProps> = ({ height, width }) => {
  return (
      <LottieView
        source={require('../../assets/dog-academy.json')}
        autoPlay
        style={{
          width,
          height,
        }}
        loop
      />
  );
};

export default Logo;
