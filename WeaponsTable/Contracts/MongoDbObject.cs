using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WeaponsTable.Contracts
{
    public abstract class MongoDbObject
    {
        [BsonId]
        public Guid Id { get; set; } = Guid.NewGuid();
    }
}
