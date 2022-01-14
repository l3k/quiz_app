import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  padding: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFValue(140)}px;
  padding-top: ${getStatusBarHeight() + RFValue(14)}px;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(20)}px;
`;

export const Content = styled.View`
  padding: ${RFValue(16)}px;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
`;

export const Wrapper = styled.View`
  padding: ${RFValue(16)}px;
  margin-top: -${RFValue(80)}px;
`;

export const Card = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  width: 100%;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(5)}px;
`;

export const TitleCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FormControl = styled.View`
  width: 40%;
`;

export const ContentIndicator = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContentList = styled.View`
  flex: 1;
  width: 100%;
`;

export const ListText = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const ButtonQuiz = styled.TouchableOpacity`
  width: 100%;
  margin: ${RFValue(10)}px 0;
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(30)}px;
  padding: ${RFValue(20)}px ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const TextButtonQuiz = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;
