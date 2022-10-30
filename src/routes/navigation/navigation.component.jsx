import { Fragment } from "react";
import {Link, Outlet} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

function NavigationComponent(props) {
    return (
        <Fragment>
            <nav className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>
                        <CrwnLogo className='logo' />
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop' >
                        Shop
                    </Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>

    );
}

export default NavigationComponent;