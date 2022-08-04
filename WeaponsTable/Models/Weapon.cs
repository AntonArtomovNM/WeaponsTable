using WeaponsTable.Contracts;
using WeaponsTable.Enums.Weapon;

namespace WeaponsTable.Models
{
    public class Weapon : MongoDbObject
    {
        public Weapon()
        {
            Name = string.Empty;
            Damage = new Dice();
            Price = new Money();
            WeaponProperties = new List<WeaponPropertyLink>();
        }

        public string Name { get; set; }

        public Dice Damage { get; set; }

        public WeaponType WeaponType { get; set; }

        public Money Price { get; set; }

        public float Weight { get; set; }

        public string? Description { get; set; }

        public ICollection<WeaponPropertyLink> WeaponProperties { get; set; }
    }
}
