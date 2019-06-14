import React from 'react';
import styled from 'styled-components';


class Login extends React.Component{


clickToLog = () => {
    localStorage.setItem('user','Username');
    window.location.reload();
}

    render(){
       return <Button onClick={this.clickToLog}>LogIn</Button>
    }
}

export default Login


const Button = styled.button`

`