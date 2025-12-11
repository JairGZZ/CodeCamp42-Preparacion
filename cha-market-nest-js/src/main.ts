import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NotificationModule } from './modules/NotificationModule';

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);

  const config = new DocumentBuilder()
    .setTitle('Mi API')
    .setDescription('Cha Market API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  //el css personalizado deberia estar en un archivo aparte 
  // pero por alguna razon no detecta la ruta del archivo y ya me estoy quedando ciego
  SwaggerModule.setup('api', app, document, {
    customCss: `.swagger-ui { background: #1a1a1a; }
.swagger-ui .topbar { background-color: #2d2d2d; border-bottom: 2px solid #4a4a4a; }
.swagger-ui .info { color: #e0e0e0; }
.swagger-ui .info .title { color: #ffffff; }
.swagger-ui .scheme-container { background: #2d2d2d; box-shadow: 0 1px 2px 0 rgba(0,0,0,.5); }
.swagger-ui .opblock { border-color: #4a4a4a; background: #2d2d2d; }
.swagger-ui .opblock .opblock-summary { border-color: #4a4a4a; }
.swagger-ui .opblock .opblock-summary-description { color: #e0e0e0; }
.swagger-ui .opblock .opblock-summary-path { color: #a8dadc; }
.swagger-ui .opblock.opblock-get { border-color: #61affe; background: rgba(97,175,254,.1); }
.swagger-ui .opblock.opblock-post { border-color: #49cc90; background: rgba(73,204,144,.1); }
.swagger-ui .opblock.opblock-put { border-color: #fca130; background: rgba(252,161,48,.1); }
.swagger-ui .opblock.opblock-delete { border-color: #f93e3e; background: rgba(249,62,62,.1); }
.swagger-ui .btn { background: #4a4a4a; color: #fff; border-color: #6a6a6a; }
.swagger-ui .btn:hover { background: #5a5a5a; }
.swagger-ui .model { color: #e0e0e0; }
.swagger-ui section.models { border-color: #4a4a4a; }
.swagger-ui .model-box { background: #2d2d2d; }
.swagger-ui .responses-inner { border-color: #4a4a4a; }
.swagger-ui .response-col_status { color: #e0e0e0; }
.swagger-ui table thead tr th { color: #e0e0e0; border-color: #4a4a4a; }
.swagger-ui table tbody tr td { color: #e0e0e0; border-color: #4a4a4a; }
.swagger-ui .parameters-col_description { color: #e0e0e0; }`,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
