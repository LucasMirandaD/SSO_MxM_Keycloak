# SSO_MxM&Keycloak

Este proyecto es una demostración de cómo integrar Keycloak para autenticación utilizando HTML y JavaScript. A continuación, se detallan los pasos para configurar y utilizar este proyecto.

## Requisitos

- Un servidor de Keycloak configurado.
- Un `client_id`, `redirect_uri` y tu `client_secret` .

## Configuración

1. **Configurar Keycloak**:
   - Asegúrate de tener un cliente Keycloak configurado con los siguientes parámetros:
     - `client_id`
     - `redirect_uri`
     - `client_secret`

2. **Actualizar el archivo de configuración de variables**:
   - Asegúrate de reemplazar las siguientes variables en el archivo `config.js`:
     - `HOST`
     - `REDIRECTION_URL`
     - `CLIENT_ID`
     - `CLIENT_SECRET`
     - `URL_BASE_KEYCLOAK`

## Archivos del Proyecto

**index.html**
- Página principal que muestra la información del usuario después de iniciar sesión.

 **login.html**
- Página de inicio de sesión donde el usuario es redirigido para autenticarse.

 **main.js**
- Importa y ejecuta las funciones necesarias para la autenticación y cierre de sesión.

 **config.js**
- Configuración que contiene las constantes necesarias para la integración con Keycloak.

 **auth.js**
- Maneja la autenticación con Keycloak.

 **user.js**
- Archivo que maneja la visualización de la información del usuario.

 **logout.js**
- Archivo que maneja el cierre de sesión con Keycloak.



# Documentación de Endpoints implementados en la solución:

`URL_BASE_KEYCLOAK = http://dicmxmkeycloakdev.mendoza.gov.ar/realms/mendoza_x_mi/protocol/openid-connect`

## login.js

### URL inicio de sesión:

- **URL:** `${URL_BASE_KEYCLOAK}/auth`
- **Parámetros:**
  - `response_type=code`
  - `client_id=${CLIENT_ID}`
  - `redirect_uri=${encodeURIComponent(REDIRECTION_URL)}`
  - `login=true`
  - `scope=openid`
- **Descripción:**
  Genera la URL de autenticación para Keycloak y la asigna al botón de inicio de sesión. Cuando se hace clic en el botón de inicio de sesión, el usuario es redirigido a la página de inicio de sesión de Keycloak.

## auth.js

### Endpoint: /token

- **URL:** `${URL_BASE_KEYCLOAK}/token`
- **Método:** POST
- **Encabezados:**
  - `Content-Type: application/x-www-form-urlencoded`
- **Parámetros del Cuerpo:**
  - `client_id`: El ID del cliente de tu configuración de Keycloak.
  - `client_secret`: El secreto del cliente de tu configuración de Keycloak.
  - `code`: El código de autorización obtenido de la URL.
  - `redirect_uri`: La URI a la que redirigir después del inicio de sesión.
  - `grant_type`: Establecido en `authorization_code`.
- **Descripción:**
  Intercambia el código de autorización por un token de acceso, token de ID y token de actualización. Los tokens se almacenan en `localStorage` para su uso posterior.

```curl
curl -X POST "${URL_BASE_KEYCLOAK}/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=${CLIENT_ID}" \
  -d "client_secret=${CLIENT_SECRET}" \
  -d "code=${CODE}" \
  -d "redirect_uri=${REDIRECTION_URL}" \
  -d "grant_type=authorization_code"
  ```

### Endpoint: /userinfo

- **URL:** `${URL_BASE_KEYCLOAK}/userinfo`
- **Método:** POST
- **Encabezados:**
  - `Authorization: Bearer ${access_token}`
  - `Content-Type: application/json`
- **Descripción:**
  Obtiene la información del usuario utilizando el token de acceso. La información del usuario se almacena en `localStorage` y se muestra utilizando la función `displayUserInfo`.

```curl
curl -X POST "${URL_BASE_KEYCLOAK}/userinfo" \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json"
  ```

### Endpoint: /logout

- **URL:** `${URL_BASE_KEYCLOAK}/logout`
- **Método:** POST
- **Encabezados:**
  - `Content-Type: application/x-www-form-urlencoded`
- **Parámetros del Cuerpo:**
  - `client_id`: El ID del cliente de tu configuración de Keycloak.
  - `refresh_token`: El token de actualización de `localStorage`.
  - `client_secret`: El secreto del cliente de tu configuración de Keycloak.
- **Descripción:**
  Cierra la sesión del usuario invalidando el token de actualización. Si el cierre de sesión es exitoso, se muestra una alerta y se limpia `localStorage`.

```curl
curl -X POST "${URL_BASE_KEYCLOAK}/logout" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id=${CLIENT_ID}" \
  -d "refresh_token=${refresh_token}" \
  -d "client_secret=${CLIENT_SECRET}"
  ```