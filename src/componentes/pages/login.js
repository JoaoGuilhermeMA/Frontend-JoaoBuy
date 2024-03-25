import React, { useState } from 'react';
import Styles from './styles/login.module.css';

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Chama a função de registro
      onRegister(username, password);
    } else {
      // Chama a função de login
      onLogin(username, password);
    }
  };

  return (
    <div className={Styles.container}>
      <h2>{isRegistering ? 'Registrar' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <div className={Styles.formGroup}>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={Styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={Styles.btnSubmit}>{isRegistering ? 'Registrar' : 'Entrar'}</button>
      </form>
      <p>
        {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}
        <button className={Styles.btnRegister} type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login' : 'Registrar'}
        </button>
      </p>
    </div>
  );
}

export default Login;
