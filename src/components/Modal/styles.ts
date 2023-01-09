
import { Modal, ModalBaseProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const ModalContainer = styled(Modal)<ModalBaseProps>`
  flex: 1;
  position: absolute;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;

`

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  background-color: rgba(0, 0, 0, .3);
`

export const Content = styled.View`
  width: 100%;
  height: 192px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 8px;

  padding: 40px 24px 24px 24px;
   
`

export const Title = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const ButtonsBox = styled.View`
  flex-direction: row;
  margin-top: 32px;
`
export const Separator = styled.View`
  width: 12px;
`