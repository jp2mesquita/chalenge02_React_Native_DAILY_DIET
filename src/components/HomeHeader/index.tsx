import { Avatar, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png'
import avtarImg from '@assets/avatar.png'

export function HomeHeader(){
  return(
    <Container>
      <Logo 
        source={logoImg}
      />

      <Avatar 
        source={avtarImg}
      />
    </Container>
  )
}