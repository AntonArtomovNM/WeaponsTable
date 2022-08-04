using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Models;
using WeaponsTable.Settings;

namespace WeaponsTable.Services
{
    public class WeaponProvider : MongoDbProviderBase<Weapon>, IWeaponProvider
    {
        private readonly IMongoCollection<Weapon> _mongoCollection;

        public WeaponProvider(IOptions<MongoDbSettings> dbSettingsOption)
        {
            var dbSettings = dbSettingsOption.Value;
            var mongoClient = new MongoClient(dbSettings.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.DatabaseName);

            _mongoCollection = mongoDatabase.GetCollection<Weapon>(dbSettings.WeaponCollectionName);
        }

        public async Task<Weapon> CreateWeapon(Weapon weapon)
        {
            await _mongoCollection.InsertOneAsync(weapon);
            return weapon;
        }

        public async Task<Weapon> UpdateWeapon(Weapon weapon)
        {
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
