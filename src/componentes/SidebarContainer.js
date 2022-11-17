import React from "react";
import Menu from "../componentes/Menu";
import { Link } from 'react-router-dom';
import Logo from '../../node_modules/admin-lte/dist/img/logo.png';

const SidebarContainer = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={"#"} className="brand-link">
                <img src={Logo} alt="TuDoctorOnline Logo" height="45px" width="50px" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Tu Doctor Online</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        &nbsp;
                    </div>
                    <div className="info">
                        &nbsp;
                    </div>
                    <div className="info">
                        <Link to={"#"} className="d-block">Menu Principal</Link>
                    </div>
                </div>

                <Menu></Menu>

            </div>
        </aside>
    );
}

export default SidebarContainer;