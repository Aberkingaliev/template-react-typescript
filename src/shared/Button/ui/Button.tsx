import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.css';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string,
  blackColor?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<IButtonProps> = ({ value, onClick, blackColor }) => { 
  
  const classes = {
    mainStyles: style['button-test'],
    blackColor: blackColor ? style['button-black'] : '',
  };

  return (
    <button onClick={onClick} className={classes.mainStyles + ' ' + classes.blackColor}>
      {value}
    </button>
  );
};
 
export default Button;