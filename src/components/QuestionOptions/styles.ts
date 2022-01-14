import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
  flex-wrap: wrap;
  width: 100%;
`;

export const Options = styled.View`
  margin-top: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
`;
