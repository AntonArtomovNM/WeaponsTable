using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Models;
using WeaponsTable.Settings;

namespace WeaponsTable.Services
{
    public class WeaponPropertyProvider : MongoDbProviderBase<WeaponProperty>, IWeaponPropertyProvider
    {
        private readonly IMongoCollection<WeaponProperty> _mongoCollection;

        public WeaponPropertyProvider(IOptions<MongoDbSettings> dbSettingsOption)
        {
            var dbSettings = dbSettingsOption.Value;
            var mongoClient = new MongoClient(dbSettings.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.DatabaseName);

            _mongoCollection = mongoDatabase.GetCollection<WeaponProperty>(dbSettings.WeaponPropertyCollectionName);
        }

        public async Task<WeaponProperty> CreateWeaponProperty(WeaponProperty weaponProperty)
        {
            await _mongoCollection.InsertOneAsync(weaponProperty);
            return weaponProperty;
        }

        public async Task<WeaponProperty> UpdateWeaponProperty(WeaponProperty weaponProperty)
        {
            await _mongoCollection.ReplaceOneAsync(GetIdFilter(weaponProperty.Id), weaponProperty);
            return weaponProperty;
        }

        public async Task DeleteWeaponProperty(Guid weaponPropertyId)
        {
            await _mongoCollection.DeleteOneAsync(GetIdFilter(weaponPropertyId));
        }

        public async Task<WeaponProperty> GetWeaponProperty(Guid weaponPropertyId)
        {
            return await _mongoCollection.Find(GetIdFilter(weaponPropertyId)).FirstOrDefaultAsync();
        }

        public async Task<ICollection<WeaponProperty>> GetWeaponPropertyList()
        {
            return await _mongoCollection.Find(_ => true).ToListAsync();
        }
    }
}
