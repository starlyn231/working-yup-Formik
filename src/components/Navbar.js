import React from "react";
import "../style/NavbarStyle.css";
export const Navbar = () => {
  return (
    <div>
      <header className="main-header">
        <h1> The Code Magazine</h1>
        <nav></nav>
      </header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque porro
        voluptatibus impedit libero reprehenderit maxime similique. Possimus
      </p>
      <h1 className="curso-css">Curso css3 , para pulirme</h1>
      <ul className="navmenu">
        <li className="">
          <a href="">Home Enter to link</a>
        </li>
        <li className="">Reservaciones</li>
        <li className="">Compras</li>
      </ul>

      <h2>Titulo dos</h2>

      <div className="texto">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque porro
          voluptatibus impedit libero reprehenderit maxime similique. Possimus
          consectetur earum quas esse dolor adipisci, repellendus ut temporibus
          corporis dignissimos rerum ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa
          quisquam consequuntur laboriosam nobis ratione, officia optio id
          asperiores. Numquam tempora quae accusantium ab possimus! Veniam totam
          fugit ad mollitia.
        </p>
      </div>
      <h4>In HTML, each element is made up of 3 parts :</h4>
      <div id="lista-2">
        <h3>Why should you learn HTML?</h3>
        <h4>
          Qué hizo ayer? Compilación de utilitario de timeout con la
          UST.Revisión de log de errores en producción. :
        </h4>
        <ul>
          <li>The opening tag</li>
          <li>The closing Tag</li>
          <li>The actual element</li>
        </ul>
      </div>
    </div>
  );
};
