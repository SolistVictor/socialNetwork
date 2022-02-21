import { Link } from 'react-router-dom';
import '../index.css';


function LoginPage() {
    return (
        <form className="form">
            <h1>Login</h1>
            <div className="form_input">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
            </div>
            <div className="form_input">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <div className="form_input">
                <button className="btn_form">Logon</button>
                <button className="btn_form">
                    <Link className='link_item_reg' to='/register'>Registration</Link>
                </button>
            </div>


        </form>
    );
}

export default LoginPage;