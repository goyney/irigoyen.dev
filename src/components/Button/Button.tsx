import { FunctionComponent } from 'preact';
import cx from 'clsx';

import { ButtonProps } from './ButtonProps';

import classes from './Button.scss';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  disabled = false,
  href,
  native = false,
  onClick = () => {},
  startIcon,
  target,
  type = 'button',
  variant = 'neutral',
  ...rest
}) => {
  const Element = href ? 'a' : 'button';

  return (
    <Element
      aria-disabled={href && disabled || undefined}
      className={cx(classes.root, classes[variant], {
        [classes.disabled]: disabled
      }, className)}
      disabled={!href && disabled || undefined}
      href={href}
      native={href && native || undefined}
      onClick={onClick}
      target={href && target}
      type={!href ? type : undefined}
      {...rest}
    >
      {startIcon && <span className={classes['start-icon']}>{startIcon}</span>}
      {children}
    </Element>
  );
};

export default Button;
