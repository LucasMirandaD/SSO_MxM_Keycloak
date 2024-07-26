import { URL_BASE_KEYCLOAK, LOGIN_URL } from './config.js';

export const setupLogoutButton = () => {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Generar la URL de logout
            const logoutParams = new URLSearchParams({
                id_token_hint: localStorage.getItem('idToken'),
                post_logout_redirect_uri: LOGIN_URL
            });

            fetch(`${URL_BASE_KEYCLOAK}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: logoutParams.toString(),
            })
            .then(response => {
                console.log("Status Code: ", response.status);
                if (response.redirect) {
                    // Limpiar localStorage
                    localStorage.removeItem('userName');
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem('userDOB');
                    localStorage.removeItem('userCUIL');
                    localStorage.removeItem('userRoles');
                    localStorage.removeItem('idToken');

                    // Redirigir al usuario
                    window.location.href = LOGIN_URL;
                } else {
                    response.text().then(errorText => {
                        console.error('Error during logout:', errorText);
                    });
                }
            })
            .catch(error => {
                console.error('Logout error:', error);
            });
        });
    }
};
