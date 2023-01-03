import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding: 8px 16px;

  margin-top: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 99999px;

  align-items: center;
`

export type MealDietStatusStyleProps = 'INSIDE' | 'OUTSIDE'

interface MealDietStatusProps {
  status: MealDietStatusStyleProps
}

export const MealDietStatus = styled.View<MealDietStatusProps>`
  width: 8px;
  height: 8px;
  
  border-radius: 99999px;

  margin-right: 8px;
  
  background-color: ${({ theme, status = "INSIDE" }) => 
    status === 'INSIDE'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK
  }
`