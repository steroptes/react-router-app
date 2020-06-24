import React from 'react'
import { Link } from "react-router-dom";

const AdminLoginArea = () => {
    return (
      <div>
        <h1>This is the Admin Landing Page</h1>
        <p>You must log in to view the page as admin</p>

        <Link to="/admin">
          <button>Log in</button>
        </Link>
      </div>
    );
}

export default AdminLoginArea
