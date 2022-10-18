import React from 'react';

export default function Header() {
  return (
    <div>
      <body>
        <ul className="header">
          <h1 className="port">
            Port<span className="folio">folio</span>
          </h1>
          <div className="header-menu">
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li className="news">
              <a href="#news">News</a>
            </li>
            <li className="contact">
              <a href="#contact">Contact</a>
            </li>
            <li className="about">
              <a href="#about">About</a>
            </li>
          </div>
        </ul>
      </body>
    </div>
  );
}
