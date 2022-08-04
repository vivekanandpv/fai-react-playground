import * as React from 'react';
import * as ReactRouter from 'react-router-dom';

interface AboutProps {}

interface AboutRouteParams {
  message: string;
}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const params = ReactRouter.useParams<AboutRouteParams>();
  const history = ReactRouter.useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/home',
    });
  };

  return (
    <>
      <h3>About Component: {params.message}</h3>
      <button className='btn btn-primary' onClick={handleClick}>
        Go to Home
      </button>
    </>
  );
};

export default About;
