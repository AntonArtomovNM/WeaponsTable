using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Entities;
using WeaponsTable.Settings;

namespace WeaponsTable.Repositories
{
    public class WeaponRepository : GenericRepository<Weapon>, IWeaponRepository
    {
        public WeaponRepository(IMongoCollection<Weapon> mongoCollection, MongoDbSettings dbSettings) : base(mongoCollection, dbSettings)
        { }

        public async Task RemovePropertyLink(Guid propertyId)
        {
            var filter = Builders<Weapon>.Filter.ElemMatch(w => w.WeaponProperties, wp => wp.PropertyId == propertyId);
            var update = Builders<Weapon>.Update.PullFilter(w => w.WeaponProperties, wp => wp.PropertyId == propertyId);

            await _mongoCollection.UpdateManyAsync(filter, update);
        }
    }
}
