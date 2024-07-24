# SSO_MxM&Keycloak

Este proyecto es una demostración de cómo integrar Keycloak para autenticación utilizando HTML y JavaScript. A continuación, se detallan los pasos para configurar y utilizar este proyecto.

## Requisitos

- Un servidor de Keycloak configurado.
- Un cliente Keycloak configurado con el `client_id`, `redirect_uri` y otros parámetros necesarios.

## Configuración

1. **Configurar Keycloak**:
   - Asegúrate de tener un cliente Keycloak configurado con los siguientes parámetros:
     - `client_id`
     - `redirect_uri`

2. **Actualizar el HTML**:
   - Reemplaza las siguientes partes en el archivo `index.html` con los valores correspondientes a tu configuración de Keycloak:
     - `client_id`
     - `redirect_uri`

3. **Actualizar el JavaScript**:
   - Asegúrate de que la URL de redirección a tu web (`REDIRECTION_URL`) en el archivo `main.js` esté correctamente configurada para tu entorno.

## Archivos del Proyecto

### - `index.html`
### - `main.js`
