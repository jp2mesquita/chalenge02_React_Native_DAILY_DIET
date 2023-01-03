import { ArrowUpRight, IconProps } from "phosphor-react-native";
import { SectionList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700} ;

  padding: 24px;
`
interface StatisticsProps {
  dietSuccessRate: boolean
}

export const StatisticsCard =  styled.TouchableOpacity<StatisticsProps>`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-inline: 16px;

  margin-top: 32px;

  align-items: center;
  justify-content: center;
  
  background-color: ${({theme, dietSuccessRate}) =>
    dietSuccessRate 
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  };
  border: none;
  border-radius: 6px;
`


export const GoFowardIcon = styled(ArrowUpRight)`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const PercentualText = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_100};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${ theme.FONT_SIZE.XXL}px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_100};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    font-size: ${ theme.FONT_SIZE.SM}px;
  `}
`
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_100};
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    font-size: ${ theme.FONT_SIZE.MD}px;
  `}

  margin-top: 40px;
  margin-bottom: 8px;
`

export const List = styled(SectionList)`
  width: 100%;
`

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    color: ${ theme.COLORS.GRAY_100};
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${ theme.FONT_SIZE.LG}px;
  `}

  margin-top: 32px;
  margin-bottom: 12px;
`

export const MealCard = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;

  align-items: center;

  gap: 2px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  margin-bottom: 8px;

  padding: 12px;
  padding-top: 16.5px;
  padding-bottom: 16.5px;
`
export const MealHour = styled.Text`
  padding-right: 12px;
`

export const MealName = styled.Text`
  flex: 1;
  padding-left: 12px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
export type MealDietStatusStyleProps = 'INSIDE' | 'OUTSIDE'

interface MealDietStatusProps {
  status?: MealDietStatusStyleProps
}

export const MealDietStatus = styled.View<MealDietStatusProps>`
  width: 14px;
  height: 14px;

  border-radius: 99999px;
  background-color: ${({ theme, status = "INSIDE" }) => 
    status === 'INSIDE'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT
  }
`