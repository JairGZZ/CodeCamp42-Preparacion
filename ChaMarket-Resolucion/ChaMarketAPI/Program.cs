using PooRepaso.Chamarket;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Agregar notifiers al contenedor de inyeccion de dependencias
builder.Services.AddSingleton<EmailNotifier>();
builder.Services.AddSingleton<PushNotifier>();
builder.Services.AddSingleton<NotificationService>();

//Agregar HttpClient para WhatsAppNotifier
builder.Services.AddHttpClient<WhatsAppNotifier>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.UseSwagger();
    app.UseSwaggerUI();

    //esto es para abrir automaticamente el navegador en la pagina de swagger
    var url = "http://localhost:5054/swagger/index.html";
    try
    {
        System.Diagnostics.Process.Start("xdg-open", url);
    }
    catch { }
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
