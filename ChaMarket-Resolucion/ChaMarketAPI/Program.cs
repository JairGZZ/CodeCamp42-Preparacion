using PooRepaso.Chamarket;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Agre
builder.Services.AddSingleton<EmailNotifier>();
builder.Services.AddSingleton<PushNotifier>();
builder.Services.AddSingleton<WhattsapNotifier>();
builder.Services.AddSingleton<NotificationService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.UseSwagger();
    app.UseSwaggerUI();


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
