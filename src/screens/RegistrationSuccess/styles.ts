import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  
  padding: 24px;
  align-items: center;
  justify-content: center;
`
interface TitleProps{
  dietControl:  'INSIDE' | 'OUTSIDE'
}

export const Title = styled.Text<TitleProps>`

  ${({ theme, dietControl }) => css`
    color: ${dietControl === 'INSIDE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const Subtitle = styled.Text`
  margin-top: 8px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`