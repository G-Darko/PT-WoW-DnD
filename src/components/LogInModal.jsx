import React, { useState } from 'react';
import CloseSVG from './CloseSVG';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (user === 'TEST' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', 'TEST');

      if (onLoginSuccess) {
        onLoginSuccess('TEST');
      }
      onClose();
      setUser('');
      setPassword('');

    } else {
      setError('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-full md:w-[50%] h-fit content-center p-8 rounded-xl shadow-2xl bg-[var(--bg)] text-[var(--text)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <CloseSVG/>
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Log In
        </h2>
        {/* Mostrar mensaje de error si existe */}
        {error && (
            <p className="text-red-500 text-center mb-4 font-semibold">
                {error}
            </p>
        )}
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block text-md font-medium mb-2"
            >
              User
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              className="w-full h-[40px] border-1 rounded-lg p-4"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-md font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-[40px] border-1 rounded-lg p-4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mb-4 text-white font-bold rounded-lg transition-colors duration-300 bg-[var(--blz-logo)] hover:bg-[var(--blz-logo-hover)] cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;