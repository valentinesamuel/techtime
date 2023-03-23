import React, { Children, ReactNode } from 'react'
import { ButtonContainer } from './Button.styles'

type Props = {
  children: ReactNode,
  role: 'primary' | 'secondary' | 'outline'
}

const Button = (props: Props) => {
  return <ButtonContainer role={props.role}>{props.children}</ButtonContainer>;
}

export default Button