import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;