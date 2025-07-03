import { useEffect, useRef } from 'react'; 
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { oktaConfig } from '../lib/oktaConfig';
const OktaSignInWidget = ({ onSuccess, onError }) => {
    const widgetRef = useRef(); 

    useEffect(() => {  
        if (!widgetRef.current) { 
            return;
        } 
        const widget = new OktaSignIn(oktaConfig); 

        widget.showSignInToGetTokens({ 
            el: widgetRef.current, 
        }).then(onSuccess).catch(onError); 
        

        return () => widget.remove();  
    }, [onSuccess, onError]); 

    return (
        <div className='container mt-5 mb-5'>
            <div ref={widgetRef}></div>
        </div>
    ); 
};

export default OktaSignInWidget; 

// useEffect and useRef are React Hooks.
// OktaSignIn is imported from Okta's Sign-in Widget library.
// oktaConfig contains Okta-related configuration (settings).
// Allows users to login by entering a Username/Password via Okta.


// A Functional Component named OktaSignInWidget is created.
// It takes two props:
// onSuccess: This will be called when the user logs in successfully.
// onError: This will be called if there is any problem in login.
// widgetRef is a React Ref that will be used to render the Okta Widget.

// Understand in easy language
// 👉 widgetRef is like an empty box, in which we can put Okta Login Widget.
// 👉 When the Component loads, the Okta Widget is put inside that box (div).
// 👉 This creates a proper connection between React and Okta Sign-In Widget and the login UI appears.

// 👉 This useEffect runs when the component is loaded.
// It first checks if the widgetRef exists correctly.
// Then the Okta Widget is initialized with the oktaConfig.
// The Okta Login Page is shown using the widget.showSignInToGetTokens() method.
// If the login is successful 👉 onSuccess is called.
// If an error occurs 👉 onError is called.
// When the component is unmounted, the widget is removed using widget.remove() to avoid any memory leakage.

{/* <div className='container mt-5 mb-5'>
This is Bootstrap's container class which gives a margin of 5px on top (mt-5) and bottom (mb-5).
<div ref={widgetRef}></div>
The Okta Login Widget will be loaded in this div. */}

// 👉 It exports the component for use in other files.