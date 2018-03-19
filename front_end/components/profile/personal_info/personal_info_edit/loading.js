import React, {Component} from 'react';

export default class Loading extends Component {

  //
  // loading() {
  //   this.interval = setTimeout( () => {
  //     if ( this.state.loading.length <= 9 && this.state.direction === 'right') {
  //       this.setState({loading: this.state.loading + '.'});
  //       this.loading();
  //     } else {
  //       this.setState({direction: 'left'});
  //       if ( this.state.loading.length > 7 && this.state.direction === 'left') {
  //         this.setState({ loading: this.state.loading.slice(0, this.state.loading.length-1)});
  //         this.loading();
  //       } else {
  //         this.setState({direction: 'right'});
  //         this.loading();
  //       }
  //     }
  //   }, 200);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  //
  // componentDidMount() {
  //   this.loading();
  // }
  constructor() {
    super();
    this.state = {
      width: 0
    }
  }

  componentWillMount() {
    this.up();
  }

  up() {
    this.interval = setTimeout(() => {

      if( this.state.width < 100) {
        this.setState({ width: this.state.width+2});
        this.up();
      } else {
        this.down();
      }
    },20)
  }

  down() {
    this.interval = setTimeout(() => {
      if( this.state.width >= 0) {
        this.setState({ width: this.state.width-2});
        this.down();
      } else {
        this.up();
        clearInterval(this.interval);
      }
    }, 20)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const style = {
      marginTop: '80px',
      width: `${this.state.width}%`,
      height: '2px',
      background: 'lightblue'
    }

    return (
      <div className='loading'>
        <div style={style}>
        </div>
      </div>
    );
  }
}
