namespace WeaponsTable.Settings
{
    public class MongoDbSettings
    {
        public const string SectionKey = "mongoDB";

        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string WeaponCollectionName { get; set; } = null!;

        public string WeaponPropertyCollectionName { get; set; } = null!;

        public bool ShouldMarkChanges { get; set; }
    }
}
