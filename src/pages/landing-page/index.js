import React from 'react';
import { Link } from "react-router-dom";


function LandingPage() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-light px-4">
                    &nbsp;
                    <Link className="nav-link" to="/">
                        <span className='navbar-brand-logo'>IMES</span>
                    </Link>
                </nav>
            </header>
            <main>
            </main>
        </div>
    );
}

export default LandingPage;