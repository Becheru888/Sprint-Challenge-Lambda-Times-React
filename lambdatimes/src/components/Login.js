import React from 'react';
import styled from 'styled-components';


class Login extends React.Component{


clickToLog = () => {
    localStorage.setItem('user','Username');
    window.location.reload();
}

    render(){
       return <Button onClick={this.clickToLog}>Login</Button>
    }
}

export default Login


const Button = styled.button`
 margin-top:300px;
 width:300px;
 height:100px;
 background-color:white;
 border:1px solid gray;
 border-radius:3px;
`