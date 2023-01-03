import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Text, TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type IconTypes = 'Pencil' | 'Trash'

interface ButtonProps extends TouchableOpacityProps{
  title: string
  type?: ButtonTypeStyleProps
  icon?: IconTypes
}

export function Button({ title, type= 'PRIMARY', icon, ...rest}: ButtonProps){
  return(
    <Container
      type={type}
      activeOpacity={.8}
      {...rest}
    >
      {
        icon === 'Pencil' && 
        <PencilSimpleLine 
          size={18}
          style={{marginRight: 12}}
          color='#fff'
        />
      }
      
      {
        icon === 'Trash' &&
          <Trash 
            size={18}
            style={{marginRight: 12}}
          />
      }

      <Title
        type={type}
      >
        {title}
      </Title>
    </Container>
  )
}