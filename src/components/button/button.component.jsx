
   
import './button.styles.scss';

function Button({ children, buttonType, ...otherProps }){
  return (
    <button
      className={`button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;