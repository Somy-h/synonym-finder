import "./button.styles.scss";

const Button = ({ children, isLoading = false, ...otherProps }) => {
  const spinner = <div className='spinner-container'></div>;

  return (
    <button className={`button-container`} {...otherProps}>
      {isLoading ? spinner : children}
    </button>
  );
};
export default Button;
