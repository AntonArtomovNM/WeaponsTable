using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Entities;
using WeaponsTable.Settings;

namespace WeaponsTable.Repositories
{
    public class WeaponPropertyRepository : GenericRepository<WeaponProperty>, IWeaponPropertyRepository
    {
        public WeaponPropertyRepository(IMongoCollection<WeaponProperty> mongoCollection, MongoDbSettings dbSettings) : base(mongoCollection, dbSettings)
        {}
    }
}
