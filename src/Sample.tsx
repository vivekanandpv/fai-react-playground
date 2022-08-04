import * as React from 'react';

interface SampleProps {
  render: (firstName: string, lastName: string, place: string) => JSX.Element;
}

const Sample: React.FunctionComponent<SampleProps> = (props) => {
  return (
    <>
      <h3>Sample Component</h3>
      {props.render('Rajan', 'Sharma', 'Amritsar')}
    </>
  );
};

export default Sample;
