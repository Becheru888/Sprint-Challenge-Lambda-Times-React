import React from 'react';

const withAuthentication = TimesPage => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loggedIn: false,
            };
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }

        render(){
            if (this.state.loggedIn) return <TimesPage />;
            return <Login />;
        }

    }
 
    export default withAuthentication;