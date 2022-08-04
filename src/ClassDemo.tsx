import * as React from 'react';

interface ClassDemoProps {
  message: string;
}

interface ClassDemoState {
  counter: number;
}

class ClassDemo extends React.Component<ClassDemoProps, ClassDemoState> {
  constructor(props: ClassDemoProps) {
    super(props);

    this.state = {
      counter: 0,
    };

    //  Solution 2
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  //  Solution 1
  //   handleClick = () => {
  //     this.setState((s, p) => {
  //       return {
  //         counter: s.counter + 1,
  //       };
  //     });
  //   };

  //  Solution 2
  handleClick() {
    this.setState((s, p) => {
      return {
        counter: s.counter + 1,
      };
    });
  }

  render() {
    console.log('render');

    return (
      <>
        <h3>Class Demo Component: {this.state.counter}</h3>
        <p>{this.props.message}</p>
        <button className='btn btn-warning' onClick={this.handleClick}>
          Say Hi
        </button>
      </>
    );
  }
}

export default ClassDemo;
