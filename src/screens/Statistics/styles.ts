import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface StatisticsProps{
  dietSuccessRate: boolean
}

export const Container = styled(SafeAreaView)<StatisticsProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, dietSuccessRate}) =>
    dietSuccessRate
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  } ;

  padding-top: 24px;
`
export const Header = styled.View`
  
  align-items: center;
  justify-content: center;
  padding-bottom: 34px;
  width: 100%;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  left: 24px;
  top: 0px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
}))
``;

export const Percent = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `
  }
  
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

`

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;;
  `};

  margin-top: 33px;
  margin-bottom: 23px;

`

export const ColoredCardsContainer = styled.View`
  width: 100%;
  flex-direction: row;
`
export const Separator = styled.View`
  width: 12px;
`