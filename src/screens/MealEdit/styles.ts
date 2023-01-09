import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TextInput } from "react-native";

export const Container = styled(SafeAreaView)`
  width: 100%; 
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  left: 24px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))
``;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding-bottom: 40px;
`
export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

const BaseInput = styled(TextInput)`
  flex: 1;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-top: 4px;
  padding-left: 24px;
  padding-right: 24px;

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
`

export const NameInput = styled(BaseInput)` 
  min-height: 48px;
  max-height: 48px;
`

export const DescriptionInput = styled(BaseInput)`
  min-height: 120px;
  max-height: 120px;
  padding-top: 16px;
  text-align: justify;
`
export const HorizontalBox = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
`
export const DataInput = styled(BaseInput)`
  min-height: 48px;
  max-height: 48px;
`

interface SeparatorProps {
  width: number
}

export const Separator = styled.View<SeparatorProps>`
  width: ${({ width }) => width}px;
`

export const HourInput = styled(BaseInput)`
  min-height: 48px;
  max-height: 48px;
`

export const ButtonBox = styled.View`
  margin-top: 70px;
`