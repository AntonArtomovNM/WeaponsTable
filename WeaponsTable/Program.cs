using Serilog;
using WeaponsTable.Contracts;
using WeaponsTable.Extensions;
using WeaponsTable.Providers;
using WeaponsTable.Settings;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

var builder = WebApplication.CreateBuilder(args);
IConfiguration config = builder.Configuration;

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddLogging(config);
builder.Services.AddScoped<IWeaponProvider, WeaponProvider>();
builder.Services.AddScoped<IWeaponPropertyProvider, WeaponPropertyProvider>();

builder.Services.Configure<MongoDbSettings>(config.GetSection(MongoDbSettings.SectionKey));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
