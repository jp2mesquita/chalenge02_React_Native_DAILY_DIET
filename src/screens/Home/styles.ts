import theme from "@theme/index";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700} ;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`
export const Button =  styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 4px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`