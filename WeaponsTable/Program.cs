using MongoDB.Driver;
using Serilog;
using SimpleInjector;
using WeaponsTable.Contracts;
using WeaponsTable.Entities;
using WeaponsTable.Extensions;
using WeaponsTable.Repositories;
using WeaponsTable.Settings;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

var builder = WebApplication.CreateBuilder(args);
IConfiguration configuration = builder.Configuration;

var container = new Container();


// Add logging
builder.Host.UseSerilog();
builder.Services.AddLogging(configuration);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSimpleInjector(container, options =>
{
    options.AddLogging()
           .AddAspNetCore()
           .AddControllerActivation();
});
container.Initialize(configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.Services.UseSimpleInjector(container);
container.Verify();

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
