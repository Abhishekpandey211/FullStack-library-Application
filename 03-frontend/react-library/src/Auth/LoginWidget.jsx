import { Redirect } from 'react-router-dom';  
import { useOktaAuth } from '@okta/okta-react'; 
import { SpinnerLoading } from '../layouts/Utils/SpinnerLoading';  
import OktaSignInWidget from './OktaSignInWidget';  
  
const LoginWidget = ({ config }) => {  
    const { oktaAuth, authState } = useOktaAuth();   
    const onSuccess = (tokens)  => {  
    oktaAuth.handleLoginRedirect(tokens);  
    };  
    const onError = (err) => { 
        console.log('Sign in error: ', err);
    }

    if (!authState) { 
        return (
            <SpinnerLoading/> 
        );
    }

    return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }}/>
    :
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>;
};
export default LoginWidget;

// What does this code mean?
// Redirect: To redirect the user to another page (e.g. homepage/) after login.
// useOktaAuth: It provides information and functions related to Okta Authentication.
// SpinnerLoading: To show a loading animation when data is loading.
// OktaSignInWidget: Custom login form, built with the help of Okta.

// This is a functional component named LoginWidget, which takes a props named config. This config can contain settings related to Okta authentication.

// oktaAuth: It manages authentication related operations like login, logout etc.
// authState: It holds the authentication status of the user (Authenticated or Not Authenticated).

// If the login is successful, the onSuccess function manages Okta's tokens via handleLoginRedirect.
// Okta tokens are used to manage user sessions.

// If the login fails, the onError function will show the error in the console.

// If authState is not loaded, a loading spinner will be shown.
// This means until the login information is received from Okta, it will show a loading screen on the page.

// What is this code doing?
// If the user is already logged in (authState.isAuthenticated === true), it will redirect them to the home page (/).
// If the user is not logged in, it will show the OktaSignInWidget component, which will manage the login form.

// Through this line the LoginWidget is being exported so that it can be imported and used in another file.