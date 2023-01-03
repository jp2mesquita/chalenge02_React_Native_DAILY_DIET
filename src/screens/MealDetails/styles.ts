import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface MealDetailsProps{
  dietControl: 'INSIDE' | 'OUTSIDE'
}

export const Container = styled(SafeAreaView)<MealDetailsProps>`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme, dietControl }) => 
    dietControl === 'INSIDE'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  };
`
export const Header = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  padding-top: 24px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  left: 24px;

`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))
``;


export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 42px;
  

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;;
  `};
  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `};
  margin-top: 24px;
  margin-bottom: 8px;
`

export const ButtonsBox = styled.View`
  margin-top: auto;
`