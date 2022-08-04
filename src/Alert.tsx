import * as React from 'react';

interface AlertProps {
  cssClass?: string;
  children: JSX.Element | JSX.Element[];
}

const Alert: React.FunctionComponent<AlertProps> = (props) => {
  return (
    <>
      <div
        className={
          props.cssClass
            ? `alert alert-${props.cssClass}`
            : 'alert alert-primary'
        }
        role='alert'
      >
        {props.children}
      </div>
    </>
  );
};

export default Alert;
