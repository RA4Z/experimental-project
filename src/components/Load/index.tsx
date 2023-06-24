import React from 'react';
import LottieView from 'lottie-react-native';

interface LoadProps {
  height: number;
  width: number;
  opacity: number;
}

const Load: React.FC<LoadProps> = ({ height, width, opacity }) => {
  return (
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        style={{
          width,
          height,
          opacity
        }}
        loop
      />
  );
};

export default Load;
