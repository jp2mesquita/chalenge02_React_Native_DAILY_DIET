import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface ButtonProps{
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;

  flex-direction: row;

  background-color: ${({ theme, type }) => 
    type === 'PRIMARY'
    ? theme.COLORS.GRAY_200
    : theme.COLORS.GRAY_700
  };

  border: 1px solid ${({ theme, type }) =>
    type === 'PRIMARY'
      ? 'transparent'
      : theme.COLORS.GRAY_100
  };

  border-radius: 6px;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<ButtonProps>`
    ${({ theme, type}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${ 
      type === 'PRIMARY'
        ? theme.COLORS.WHITE
        : theme.COLORS.GRAY_100
      };
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`