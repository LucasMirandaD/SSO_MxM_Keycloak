const keycloak = async () => {
    const HOST = 'TU HOST';
    const CLIENT_ID = 'TU CLIENT ID';
    // URL de redirección después del inicio de sesión
    const REDIRECTION_URL = `TU URL DE REDIRECCION`;
    // URL base de Keycloak
    const URL_BASE_KEYCLOAK = 'http://dicmxmkeycloakdev.mendoza.gov.ar/realms/mendoza_x_mi/protocol/openid-connect';

    // Generar URL de autenticación
    const authUrl = `${URL_BASE_KEYCLOAK}/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECTION_URL)}&login=true&scope=openid`;

    // Asignar URL generada al botón
    document.getElementById('loginButton').setAttribute('href', authUrl);

    // Obtiene los parámetros de la URL actual
    const urlParams = window.location.search && new URLSearchParams(window.location.search);
    if (urlParams && urlParams.get('code')) {
        const code = urlParams.get('code');
        console.log('code', code);
        try {
            // Crea los parámetros para el intercambio de código por token
            const params = new URLSearchParams({
                client_id: CLIENT_ID,
                code: code,
                redirect_uri: REDIRECTION_URL,
                grant_type: 'authorization_code'
            });

            // Realiza la solicitud para obtener el token
            let result = await fetch(`${URL_BASE_KEYCLOAK}/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString(),
            });
            result = await result.json();
            console.log("este es el resultado de /token: ", result);

            // Obtiene la información del usuario
            let userInfo = await fetch(`${URL_BASE_KEYCLOAK}/userinfo`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${result.access_token}`,
                    'Content-Type': 'application/json',
                },
            });
            userInfo = await userInfo.json();
            console.log('keycloak ~ result userInfo:', userInfo);
        } catch (error) {
            console.log('keycloak ~ error:', error)
        }
    }
};

// Ejecutar keycloak al cargar la página
keycloak();