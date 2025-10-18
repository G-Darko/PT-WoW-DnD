import React from "react";

export default function Footer() {
  return (
    <footer class="p-4 md:p-8 lg:p-10 bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-white"
        >
          <img className="mr-2 h-10" src="https://avatars.githubusercontent.com/u/112705344?v=4" alt="Gael Uribe" />
          Gael Uribe
        </a>
        <p class="my-6 text-gray-400">
          Prueba técnica Navbar estilo Warcraft
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Aviso de Privacidad
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Terminos y condiciones
            </a>
          </li>
          <li>
            <a href="https://thewarwithin.blizzard.com/en-us/" target="_blank" rel="noopener noreferrer" class="mr-4 hover:underline md:mr-6">
              Referencia WoW
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Contacto
            </a>
          </li>
        </ul>
        <span class="text-sm sm:text-center text-gray-400">
          © 2025{" "}
          <a href="https://g-darko.github.io/portafolio/" target="_blank" rel="noopener noreferrer" class="hover:underline">
            G-Darko
          </a>
        </span>
      </div>
    </footer>
  );
}
