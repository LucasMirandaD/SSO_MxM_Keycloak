import { URL_BASE_KEYCLOAK, CLIENT_ID, CLIENT_SECRET, LOGIN_URL} from './config.js';

export const setupLogoutButton = () => {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Generar la URL de logout
            const logoutParams = new URLSearchParams({
                client_id: CLIENT_ID,
                refresh_token: localStorage.getItem('refreshToken'),
                client_secret: CLIENT_SECRET,
                redirect_uri: LOGIN_URL
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
                // Con el fin de mantenerlo simple no voy a emplear metodos de redireccion al login
                if (response.status === 204) {
                    alert("Éxito al cerrar sesión");
                    localStorage.clear();
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
