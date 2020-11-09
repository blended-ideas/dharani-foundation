import styles from '../styles/component/header.module.scss';
import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    const [navbarCollapsed, setNavBarCollapsed] = useState(false);
    const collapseClass = navbarCollapsed ? 'collapse navbar-collapse' : null;

    useEffect(() => {
        setNavBarCollapsed(window.innerWidth < 500);
    });

    return (
        <header className={styles.header}>
            <Navbar bg="light" expand="lg" className="justify-content-between">
                <Container className="my-4">
                    <Navbar.Brand href="#home" className={styles.brand + ' brand'}>Dharani Foundation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#vision">Vision</Nav.Link>
                            <Nav.Link href="#mission">Mission</Nav.Link>
                            <Nav.Link href="#activities">Activities</Nav.Link>
                            <Nav.Link href="#founders">Founders</Nav.Link>
                            <Nav.Link href="#more">More</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
