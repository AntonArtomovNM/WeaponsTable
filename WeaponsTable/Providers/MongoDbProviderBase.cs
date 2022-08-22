using MongoDB.Driver;
using WeaponsTable.Contracts;

namespace WeaponsTable.Providers
{
    public abstract class MongoDbProviderBase<T> where T : MongoDbObject
    {
        private readonly FilterDefinitionBuilder<T> _filterBuilder = Builders<T>.Filter;

        protected FilterDefinition<T> GetIdFilter(Guid id)
        {
            return _filterBuilder.Eq(x => x.Id, id);
        }
    }
}