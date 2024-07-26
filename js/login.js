// login.js
import { CLIENT_ID, REDIRECTION_URL, URL_BASE_KEYCLOAK } from './config.js';

export const setupLoginButton = () => {
    // Generar URL de autenticación
    const authUrl = `${URL_BASE_KEYCLOAK}/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECTION_URL)}&login=true&scope=openid`;

    // Asignar URL generada al botón
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.setAttribute('href', authUrl);
        loginButton.addEventListener('click', () => {
            window.location.href = authUrl;
        });
    }
};
