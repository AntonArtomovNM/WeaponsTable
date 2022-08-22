using MongoDB.Driver;
using WeaponsTable.Contracts;
using WeaponsTable.Settings;

namespace WeaponsTable.Repositories
{
    public abstract class GenericRepository<T> : IRepository<T> where T : MongoDbEntity
    {
        private readonly FilterDefinitionBuilder<T> _filterBuilder = Builders<T>.Filter;
        private readonly MongoDbSettings _dbSettings;

        protected readonly IMongoCollection<T> _mongoCollection;

        public GenericRepository(IMongoCollection<T> mongoCollection, MongoDbSettings dbSettings)
        {
            _mongoCollection = mongoCollection;
            _dbSettings = dbSettings;
        }

        public async Task<T> GetById(Guid id)
        {
            return await _mongoCollection.Find(GetIdFilter(id)).FirstOrDefaultAsync();
        }

        public async Task<ICollection<T>> GetAll()
        {
            return await _mongoCollection.Find(_ => true).ToListAsync();
        }

        public async Task<T> Create(T entity)
        {
            if (_dbSettings.ShouldMarkChanges)
            {
                entity.IsNew = true;
            }

            await _mongoCollection.InsertOneAsync(entity);
            return entity;
        }

        public async Task<T> Update(T entity)
        {
            if (_dbSettings.ShouldMarkChanges)
            {
                entity.IsNew = true;
            }

            await _mongoCollection.ReplaceOneAsync(GetIdFilter(entity.Id), entity);
            return entity;
        }

        public async Task Delete(Guid id)
        {
            await _mongoCollection.DeleteOneAsync(GetIdFilter(id));
        }

        private FilterDefinition<T> GetIdFilter(Guid id)
        {
            return _filterBuilder.Eq(x => x.Id, id);
        }
    }
}