using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Entities;
using WeaponsTable.Settings;

namespace WeaponsTable.Providers
{
    public class WeaponPropertyProvider : MongoDbProviderBase<WeaponProperty>, IWeaponPropertyProvider
    {
        private readonly IMongoCollection<WeaponProperty> _mongoCollection;
        private readonly MongoDbSettings _dbSettings;

        public WeaponPropertyProvider(IOptions<MongoDbSettings> dbSettingsOption)
        {
            _dbSettings = dbSettingsOption.Value;
            var mongoClient = new MongoClient(_dbSettings.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(_dbSettings.DatabaseName);

            _mongoCollection = mongoDatabase.GetCollection<WeaponProperty>(_dbSettings.WeaponPropertyCollectionName);
        }

        public async Task<WeaponProperty> CreateWeaponProperty(WeaponProperty weaponProperty)
        {
            if (_dbSettings.ShouldMarkChanges)
            {
                weaponProperty.IsNew = true;
            }

            await _mongoCollection.InsertOneAsync(weaponProperty);
            return weaponProperty;
        }

        public async Task<WeaponProperty> UpdateWeaponProperty(WeaponProperty weaponProperty)
        {
            if (_dbSettings.ShouldMarkChanges)
            {
                weaponProperty.IsNew = true;
            }

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
