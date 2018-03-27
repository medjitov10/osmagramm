import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div>
          <a href="https://github.com/medjitov10">
            <i className="fab fa-github-alt fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/osmanmed/">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://osman-medzhytov.herokuapp.com/">
            <i className="fas fa-info-circle fa-lg"></i>
          </a>

        </div>
      </div>
    )
  }
}
