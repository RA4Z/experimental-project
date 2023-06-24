import React from 'react';
import LottieView from 'lottie-react-native';

interface LoadProps {
  height: number;
  width: number;
}

const Load: React.FC<LoadProps> = ({ height, width }) => {
  return (
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        style={{
          width,
          height,
        }}
        loop
      />
  );
};

export default Load;
