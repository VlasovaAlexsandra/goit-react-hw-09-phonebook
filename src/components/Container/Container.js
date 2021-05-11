import React from 'react';

const styles = {
    container: {
        maxWidth: '1440px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
    }
}

const Container = ({ children }) => <div styles={styles.container}>{children}</div>;

export default Container;