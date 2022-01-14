import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(16)}px;
`;

export const Header = styled.View`
  padding: ${RFValue(16)}px;
  padding-top: ${getStatusBarHeight() + RFValue(16)}px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const Space = styled.View`
  width: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
`;

export const ButtonBorderless = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(20)}px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  height: 3px;
  border-radius: 3px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.text_dark};
  margin: ${RFValue(30)}px 0;
`;

export const TextInfo = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  flex-wrap: wrap;
  margin: ${RFValue(5)}px;
`;

export const TextCorrect = styled.Text`
  color: ${({theme}) => theme.colors.success};
`;

export const TextWrong = styled.Text`
  color: ${({theme}) => theme.colors.wrong};
`;
