import React from 'react';

function Navbar() {
  return (
    <nav>
        <ul className="flex justify-end gap-x-14 pr-5 uppercase hidden">
            <li>
              <a href="/#home" className="hover:text-purple-400 text-white font-semibold">Home</a>
            </li>
            <li>
              <a href="/#about" className="hover:text-purple-400 text-white font-semibold">Sobre</a>
            </li>
            <li>
              <a href="/#projects" className="hover:text-purple-400 text-white font-semibold">Projetos</a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-purple-400 text-white font-semibold">Contato</a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
