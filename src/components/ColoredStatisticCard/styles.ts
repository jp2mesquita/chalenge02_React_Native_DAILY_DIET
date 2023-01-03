import styled, { css } from "styled-components/native";

export type ColoredCardStyledProps = 'INSIDE' | 'OUTSIDE'

interface ColoredCardProps {
  type: ColoredCardStyledProps
}

export const Container = styled.View<ColoredCardProps>`
  flex: 1;
  background-color: ${({ theme, type }) => 
    type === 'INSIDE' 
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  };
  padding: 16px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
  margin-bottom: 8px;
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  text-align: center;

`