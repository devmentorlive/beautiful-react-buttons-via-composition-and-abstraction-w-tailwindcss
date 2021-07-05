import PrimaryButton from "./primary";
import SecondaryButton from "./secondary";
import OutlineButton from "./outline";
import styles from "./styles.module.css";

export { PrimaryButton, SecondaryButton, OutlineButton };

export default function Button({
  children,
  block = false,
  renderLeftIcon = () => {},
  renderRightIcon = () => {},
  className,
  leftIconClassName,
  contentClassName,
  rightIconClassName,
  ...rest
}) {
  const leftIcon = renderLeftIcon();
  const rightIcon = renderRightIcon();
  return (
    <button
      className={`${styles.button} ${className} ${
        block ? "block w-full" : ""
      } flex items-center  space-around`}
      {...rest}
    >
      <div className={`${leftIconClassName || "justify-start"}`}>
        {leftIcon}
      </div>
      <div
        className={`${
          contentClassName || "flex-nowrap whitespace-nowrap w-full"
        }`}
      >
        {children}
      </div>
      <div className={`${rightIconClassName || "justify-end"}`}>
        {rightIcon}
      </div>
    </button>
  );
}
