import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

import {Option, Check, Active, TextOption} from './styles';

interface Props {
  isActive: boolean;
  name: string;
  press(): void;
}

export function ButtonOption({isActive, name, press}: Props) {
  const {width} = Dimensions.get('screen');
  const widthAni = useRef(new Animated.Value(width * 0.82)).current;

  useEffect(() => {
    if (isActive) {
      Animated.spring(widthAni, {
        toValue: width * 0.85,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(widthAni, {
        toValue: width * 0.8,
        useNativeDriver: false,
      }).start();
    }
  }, [isActive, width, widthAni]);

  return (
    <Animated.View style={{width: widthAni}}>
      <Option isActive={isActive} onPress={press}>
        <Check isActive={isActive}>{isActive && <Active />}</Check>
        <TextOption isActive={isActive}>{name}</TextOption>
      </Option>
    </Animated.View>
  );
}
