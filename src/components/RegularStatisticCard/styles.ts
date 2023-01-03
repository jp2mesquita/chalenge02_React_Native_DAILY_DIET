import styled, { css } from "styled-components/native";

 
export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  margin-bottom: 12px;
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
  `}
`