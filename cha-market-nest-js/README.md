# CharMarket-NotificationEngine

## Descripción

Implementación de un motor de notificaciones multicanal que permite procesar eventos y enviar notificaciones a través de email, WhatsApp y otros canales. El sistema utiliza DTOs personalizados y se integra con Airtable para el registro de eventos.

## Tecnologías Utilizadas

- **Backend:** NestJS
- **Documentación API:** Swagger UI
- **Base de Datos:** Airtable (base de datos en la nube)

## Configuración del Proyecto

### Instalación de Dependencias

```bash
npm install
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Configuración de Airtable
AIRTABLE_API_KEY=tu_api_key_de_airtable
AIRTABLE_BASE_ID=tu_base_id_de_airtable
AIRTABLE_TABLE_NAME=nombre_de_tu_tabla

# Configuración de SMTP para Email
SMTP_FROM=tu_email@ejemplo.com
SMTP_PASSWORD=tu_contraseña_smtp
EMAIL_FROM_NAME=Nombre del Remitente
```

> **Importante:** Asegúrate de configurar correctamente las credenciales de SMTP antes de ejecutar el proyecto para que las notificaciones por email funcionen correctamente.

## Ejecutar el Proyecto

```bash
# Modo desarrollo
npm run start

# Modo desarrollo con hot-reload (recomendado)
npm run start:dev

# Modo producción
npm run start:prod
```

## Uso de la API

### Endpoint Principal

```
POST http://localhost:3000/notifications/processEvent
```

### Probar con Swagger UI

Una vez iniciado el proyecto, accede a la documentación interactiva en:

**[http://localhost:3000/api](http://localhost:3000/api)**

![Interfaz de Swagger](https://github.com/user-attachments/assets/2f247ad8-08d2-4cd3-ab0b-e6c4c38383c4)

### Ejemplo de Petición

Haz clic en **"Try it out"** y utiliza el siguiente JSON de ejemplo:

```json
{
  "eventId": "a81bc81b-dead-4e5d-abff-90865d1e13b1",
  "templateKey": "descuento",
  "channels": ["email", "whatsapp"],
  "customerDTO": {
    "customerId": "usr_001",
    "email": "tu_email@ejemplo.com",
    "phoneNumber": "+51987654321",
    "deviceToken": "d3v1c3-t0k3n-abc"
  },
  "data": {
    "dscuento": "10%",
    "categoria": "aseo",
    "name": "jair",
    "fecha": "2025-12-07",
    "subject": "oferta"
  }
}
```

> **Tip:** Reemplaza el email en `customerDTO.email` con tu correo para recibir la notificación de prueba.

## Resultados

### Notificación por Email

El destinatario recibirá un email con el siguiente formato:

![Ejemplo de Email](https://github.com/user-attachments/assets/933a1d51-d976-4981-96d9-756a10aba009)

### Registro en Base de Datos

Todos los eventos procesados se registran automáticamente en Airtable:

![Registro en Airtable](https://github.com/user-attachments/assets/64f04cc1-4163-4438-b3b1-3173d6f927f3)

## Ejecutar Tests

```bash
# Tests unitarios
npm run test

# Tests end-to-end
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

---

## Notas Adicionales

- Asegúrate de tener acceso a una cuenta de Airtable y haber creado la tabla correspondiente
- Para producción, utiliza variables de entorno seguras y no expongas credenciales en el código
- Los canales disponibles actualmente son: `email` y `whatsapp`