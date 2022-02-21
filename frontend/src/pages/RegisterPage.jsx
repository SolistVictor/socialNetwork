import React from "react";
import { Link } from "react-router-dom";
import '../index.css';


function Registration() {

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <h1>Registration</h1>
            <div className="form_input">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
            </div>
            <div className="form_input">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
            </div>
            <div className="form_input">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
            </div>
            <div className="form_input">
                <button className="btn_form">
                    <Link className="link_item_reg" to='/'>Done</Link>
                </button>
            </div>

        </form>
    );

}
export default Registration;