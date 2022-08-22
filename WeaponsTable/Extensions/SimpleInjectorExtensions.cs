using MongoDB.Driver;
using SimpleInjector;
using WeaponsTable.Contracts;
using WeaponsTable.Entities;
using WeaponsTable.Repositories;
using WeaponsTable.Settings;

namespace WeaponsTable.Extensions
{
    public static class SimpleInjectorExtensions
    {
        public static void Initialize(this Container container, IConfiguration configuration)
        {
            container.Register<IWeaponRepository, WeaponRepository>(Lifestyle.Scoped);
            container.Register<IWeaponPropertyRepository, WeaponPropertyRepository>(Lifestyle.Scoped);

            var mongoDbSettings = configuration.GetSection(MongoDbSettings.SectionKey).Get<MongoDbSettings>();
            container.RegisterInstance(mongoDbSettings);

            var mongoClient = new MongoClient(mongoDbSettings.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(mongoDbSettings.DatabaseName);
            var weaponCollection = mongoDatabase.GetCollection<Weapon>(mongoDbSettings.WeaponCollectionName);
            var weaponPropertyCollection = mongoDatabase.GetCollection<WeaponProperty>(mongoDbSettings.WeaponPropertyCollectionName);

            container.RegisterInstance(weaponCollection);
            container.RegisterInstance(weaponPropertyCollection);
        }
    }
}
