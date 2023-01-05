import styled, { css } from "styled-components/native";

export type DietControlButtonStyleProps = 'INSIDE' | 'OUTSIDE'

interface DietControlButtonProps{
  type: DietControlButtonStyleProps
  isActive: boolean | undefined
}

export const Container = styled.TouchableOpacity<DietControlButtonProps>`
  width: 100%;
  flex: 1;
  flex-direction: row;
  margin-top: 8px;

  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 6px;

  ${({ theme, isActive }) => !isActive && css`
    background-color: ${theme.COLORS.GRAY_600};
  `}

  ${({ theme, isActive, type}) => isActive && css`
    border-color: ${type === "INSIDE" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    background-color: ${type === "INSIDE" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `}
`

export const MealDietStatus = styled.View<DietControlButtonProps>`
  width: 8px;
  height: 8px;
  
  border-radius: 99999px;

  margin-right: 8px;
  
  background-color: ${({ theme, type = "INSIDE" }) => 
    type === 'INSIDE'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK
  }
`