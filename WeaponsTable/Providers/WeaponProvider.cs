using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Entities;
using WeaponsTable.Settings;

namespace WeaponsTable.Providers
{
    public class WeaponProvider : MongoDbProviderBase<Weapon>, IWeaponProvider
    {
        private readonly IMongoCollection<Weapon> _mongoCollection;
        private readonly MongoDbSettings _dbSettings;

        public WeaponProvider(IOptions<MongoDbSettings> dbSettingsOption)
        {
            _dbSettings = dbSettingsOption.Value;
            var mongoClient = new MongoClient(_dbSettings.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(_dbSettings.DatabaseName);

            _mongoCollection = mongoDatabase.GetCollection<Weapon>(_dbSettings.WeaponCollectionName);
        }

        public async Task<Weapon> CreateWeapon(Weapon weapon)
        {
            if (_dbSettings.ShouldMarkChanges)
            {
                weapon.IsNew = true;
            }

            await _mongoCollection.InsertOneAsync(weapon);
            return weapon;
        }

        public async Task<Weapon> UpdateWeapon(Weapon weapon)
        {
            if (_dbSettings.ShouldMarkChanges)
            {
                weapon.IsNew = true;
            }

            await _mongoCollection.ReplaceOneAsync(GetIdFilter(weapon.Id), weapon);
            return weapon;
        }

        public async Task RemovePropertyLink(Guid propertyId)
        {
            var filter = Builders<Weapon>.Filter.ElemMatch(w => w.WeaponProperties, wp => wp.PropertyId == propertyId);
            var update = Builders<Weapon>.Update.PullFilter(w => w.WeaponProperties, wp => wp.PropertyId == propertyId);

            await _mongoCollection.UpdateManyAsync(filter, update);
        }

        public async Task DeleteWeapon(Guid weaponId)
        {
            await _mongoCollection.DeleteOneAsync(GetIdFilter(weaponId));
        }

        public async Task<Weapon?> GetWeapon(Guid weaponId)
        {
            return await _mongoCollection.Find(GetIdFilter(weaponId)).FirstOrDefaultAsync();
        }

        public async Task<ICollection<Weapon>> GetWeaponList()
        {
            return await _mongoCollection.Find(_ => true).ToListAsync();
        }
    }
}
