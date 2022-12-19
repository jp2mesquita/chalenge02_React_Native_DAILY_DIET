import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`
export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.Image`
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 99999px;
  width: 40px;
  height: 40px;
`