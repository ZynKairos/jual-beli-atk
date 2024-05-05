import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <aside class="menu" style={{ paddingLeft:'10%' }}>
        <p class="menu-label">Administrator</p>
        <ul class="menu-list">
            <li>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to={"/data-course"}>Data</NavLink>
            </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
