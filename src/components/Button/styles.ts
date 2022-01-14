import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${RFValue(16)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
`;
