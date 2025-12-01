# ChaMarketAPI

API minimal para envío de notificaciones (Email, Push, WhatsApp) usando el patrón composite.

## Requisitos

- .NET 9 SDK

## Ejecutar

1. Restaurar paquetes:

```
dotnet restore
```

2. Ejecutar la API (desde la raíz del proyecto):

```
dotnet run
```

La aplicación escuchará según la configuración en `appsettings.json` / `appsettings.Development.json`.

## Configuración

Editar `appsettings.json` o `appsettings.Development.json` para configurar credenciales (SMTP, claves de push, WhatsApp, etc.).

## Estructura relevante

- `Controllers/NotificationController.cs` — endpoints HTTP para notificaciones
- `notifier/` — implementaciones: `EmailNotifier.cs`, `PushNotifier.cs`, `WhattsapNotifier.cs`
- `notifier/composite/CompositeNotifier.cs` — compositor de notifiers
- `contract/INotifier.cs`, `entities/Notification.cs`, `context/NotificationService.cs`

