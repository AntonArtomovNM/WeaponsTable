using MongoDB.Bson.Serialization.Attributes;

namespace WeaponsTable.Contracts
{
    public abstract class MongoDbObject
    {
        [BsonId]
        public Guid Id { get; set; } = Guid.NewGuid();

        public bool? IsNew { get; set; }
    }
}
