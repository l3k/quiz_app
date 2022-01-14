import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(16)}px;
`;

export const ContentIndicator = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Header = styled.View`
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
  justify-content: space-around;
`;

export const CountQuestions = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(16)}px;
`;

export const Question = styled.View`
  flex: 1;
`;

export const ContentQuestion = styled.View`
  width: ${Dimensions.get('screen').width * 0.9}px;
  padding: ${RFValue(12)}px;
  justify-content: center;
`;

export const GroupButtons = styled.View`
  flex-direction: row;
  padding-bottom: ${getBottomSpace()}px;
  justify-content: space-between;
  align-items: center;
`;

export const ContentButton = styled.View`
  width: 48%;
`;
