using WeaponsTable.Contracts;
using WeaponsTable.Extensions;
using WeaponsTable.Services;
using WeaponsTable.Settings;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IWeaponProvider, WeaponProvider>();
builder.Services.AddScoped<IWeaponPropertyProvider, WeaponPropertyProvider>();

var mongoDbConfig = builder.Configuration.GetSection(MongoDbSettings.SectionKey);
builder.Services.Configure<MongoDbSettings>(mongoDbConfig);
builder.Services.AddHealthChecks().AddMongoDb(mongoDbConfig.Get<MongoDbSettings>().ConnectionString);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapCustomHealthChecks();
});

app.Run();
