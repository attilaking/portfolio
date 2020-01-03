import React from 'react';
import Radium from 'radium';
import $ from 'jquery';

export class Button extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.type === 'submit') {
      alert(this.props.type);
      $.ajax({
        url: 'email.php',
        data:'',
        datatype:'json',
        success: {
          function (data, textstatus, jqXHR) {
            alert("success");
          }
        },
        error: {
          function (jqXHR, data, error) {
            alert("error");
          }
        }
      });


    } else {
      alert('not submit');
    }
  }
  componentDidMount(){
}
  render() {

    const buttonStyle = {
      background: 'transparent',
      color: '' + this.props.col + '',
      border: '2px solid ' + this.props.col + '',
      width: '' + this.props.width + '',
      margin: '10px auto 0 0', //t,r,b,l

      // npm radium dependency
      ':hover': {
        background: '' + this.props.col + '',
        color: '' + this.props.textcol + ''
      },
      '@media (max-width: 992px)': {
        width: '100%',
      },
      padding: '10px',
      textTransform: 'uppercase',
      textAlign: 'center'
    };

    return (
      <div>
        <button style={buttonStyle} onClick={this.handleClick}><span>{this.props.buttontext}</span></button>
      </div>
    )
  }
}

Button = Radium(Button);

export default Button;