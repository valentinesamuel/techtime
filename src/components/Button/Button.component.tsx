import React, { ButtonHTMLAttributes, Children, FC, ReactNode } from 'react'
import { ButtonContainer } from './Button.styles'

type Props = {
  children: ReactNode,
  role: 'primary' | 'secondary' | 'outline'

}& ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<Props> = ({children, role, ...otherProps}) => {
  return (
    <ButtonContainer {...otherProps}  role={role}>
      {children}
    </ButtonContainer>
  );
}

export default Button