import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  isCorrect: boolean;
}

export const Container = styled.View``;

export const StatusQuestion = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme, isCorrect}) =>
    isCorrect ? theme.colors.success : theme.colors.wrong};
  font-size: ${RFValue(14)}px;
  margin: ${RFValue(10)}px 0;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(18)}px;
  flex-wrap: wrap;
  margin-bottom: ${RFValue(14)}px;
  width: 100%;
`;

export const Options = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const Option = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  flex-wrap: wrap;
  margin-bottom: ${RFValue(5)}px;
  width: 100%;
`;

export const Group = styled.View``;

export const UserAnswer = styled.View<Props>`
  border-radius: ${RFValue(10)}px;
  border-color: ${({isCorrect, theme}) =>
    isCorrect ? theme.colors.success : theme.colors.wrong};
  background-color: ${({isCorrect, theme}) =>
    isCorrect ? theme.colors.success_light : theme.colors.wrong_light};
  border-width: ${RFValue(2)}px;
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
`;

export const CorrectAnswer = styled.View`
  border-radius: ${RFValue(10)}px;
  border-color: ${({theme}) => theme.colors.success};
  background-color: ${({theme}) => theme.colors.success_light};
  border-width: ${RFValue(2)}px;
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(14)}px;
  align-items: center;
  justify-content: center;
`;

export const TextAnswer = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
  flex-wrap: wrap;
`;

export const TextInfo = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  flex-wrap: wrap;
  margin-bottom: ${RFValue(5)}px;
  margin-top: ${RFValue(10)}px;
`;
