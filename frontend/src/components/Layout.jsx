import { Link } from 'react-router-dom';
import '../index.css';


function Layout(props) {
    return (
        <div>
            <nav className='navigation'>
                <div className='nav_item'>
                    <Link className='link_item' to='/' >Home</Link>
                </div>
                <div className='nav_item'>
                    <Link className='link_item' to='/profile' >Profile</Link>
                </div>
                <div className='nav_item'>
                    <Link className='link_item' to='/chat' >Chat</Link>
                </div>
                <div className='nav_item'>
                    <Link className='link_item' to='/login'>Exit</Link>
                </div>
            </nav>
            <div className='container'>
                {props.children}
            </div>
        </div>

    );
}

export default Layout;