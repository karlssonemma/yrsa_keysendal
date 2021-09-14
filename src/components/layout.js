import React from 'react';

const Layout = ({ children }) => {

    return(
        <div style={{background: 'blue', width: '500px'}}>
            {children}
        </div>
    )
}

export default Layout;