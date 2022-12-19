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
`