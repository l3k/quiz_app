import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  isActive: boolean;
}

export const Option = styled.TouchableOpacity<Props>`
  margin: ${RFValue(10)}px 0;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(20)}px ${RFValue(20)}px;
  background-color: ${({isActive, theme}) =>
    isActive ? theme.colors.primary : theme.colors.shape};
`;

export const Check = styled.View<Props>`
  border-radius: ${RFValue(20)}px;
  border-color: ${({isActive, theme}) =>
    isActive ? theme.colors.text_white : theme.colors.text_dark};
  border-width: ${RFValue(2)}px;
  margin-right: ${RFValue(15)}px;
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
`;

export const Active = styled.View`
  border-radius: ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.text_white};
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
`;

export const TextOption = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({isActive, theme}) =>
    isActive ? theme.colors.text_white : theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  flex-wrap: wrap;
  width: 90%;
`;
