using WeaponsTable.Contracts;

namespace WeaponsTable.Models
{
    public class WeaponProperty : MongoDbObject
    {
        public WeaponProperty()
        {
            Name = string.Empty;
            Description = string.Empty;
        }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
