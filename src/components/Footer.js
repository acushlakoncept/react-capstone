import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          &copy;
          { ` ${(new Date()).getFullYear()} All rights reserved | site by Acushla Koncepts.`}
        </span>
      </div>
    </footer>
  );
}
