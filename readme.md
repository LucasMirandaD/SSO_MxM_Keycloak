# SSO_MxM&Keycloak

Este proyecto es una demostración de cómo integrar Keycloak para autenticación utilizando HTML y JavaScript. A continuación, se detallan los pasos para configurar y utilizar este proyecto.

## Requisitos

- Un servidor de Keycloak configurado.
- Un `client_id` y `redirect_uri`.

## Configuración

1. **Configurar Keycloak**:
   - Asegúrate de tener un cliente Keycloak configurado con los siguientes parámetros:
     - `client_id`
     - `redirect_uri`

2. **Actualizar el JavaScript**:
   - Asegúrate de reemplazar las siguientes variables en el archivo `config.js`:
     - `HOST`
     - `REDIRECTION_URL`
     - `CLIENT_ID`
     - `URL_BASE_KEYCLOAK`

## Archivos del Proyecto

### `index.html`
Página principal que muestra la información del usuario después de iniciar sesión.

### `login.html`
Página de inicio de sesión donde el usuario es redirigido para autenticarse.

### `main.js`
Archivo principal que importa y ejecuta las funciones necesarias para la autenticación y cierre de sesión.

### `config.js`
Archivo de configuración que contiene las constantes necesarias para la integración con Keycloak.

### `auth.js`
Archivo que maneja la autenticación con Keycloak.

### `user.js`
Archivo que maneja la visualización de la información del usuario.

### `logout.js`
Archivo que maneja el cierre de sesión con Keycloak.
