using Microsoft.ApplicationInsights.Extensibility;
using Serilog;
using Serilog.Sinks.ApplicationInsights.TelemetryConverters;

namespace WeaponsTable.Extensions
{
    public static class ServicesExtensions
    {
        public static IServiceCollection AddLogging(this IServiceCollection services, IConfiguration configuration)
        {
            var telemetryConfig = TelemetryConfiguration.CreateDefault();
            telemetryConfig.InstrumentationKey = configuration.GetValue<string>("AppInsights:InstrumentationKey");

            Log.Logger = new LoggerConfiguration()
                            .ReadFrom.Configuration(configuration)
                            .Destructure.ToMaximumCollectionCount(200)
                            .Destructure.ToMaximumDepth(8)
                            .WriteTo.ApplicationInsights(telemetryConfig, new TraceTelemetryConverter(), Serilog.Events.LogEventLevel.Information)
                            .WriteTo.Console()
                            .CreateLogger();

            services.AddLogging(lb =>
            {
                lb.AddSerilog(Log.Logger, true);
            });

            return services;
        }
    }
}
