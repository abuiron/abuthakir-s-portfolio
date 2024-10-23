import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Online Asssesment Portal</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Job Listing Portal</li>
        <li className="sidenavLi">Book-store App</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">Started working on a New project</li>
        <li className="sidenavLi">Completed MERN stack development Course in GUVI</li>
        <li className="sidenavLi">
         Currently looking For a MERN Stack Developer Role.
        </li>
        <li className="sidenavLi">Created a Job lisitng Portal website in Internship</li>
       
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi"><a href="https://wa.me/916380280076">+91 6380280076</a></li>
        <li className="sidenavLi"><a href="mailto:abuiron80@gmail.com"></a>abuiron80@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav