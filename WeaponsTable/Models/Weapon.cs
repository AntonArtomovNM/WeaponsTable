using WeaponsTable.Contracts;
using WeaponsTable.Enums;

namespace WeaponsTable.Models
{
    public class Weapon : MongoDbObject
    {
        public string Name { get; set; } = string.Empty;

        public WeaponType WeaponType { get; set; }

        public Money Price { get; set; } = new Money();

        public float Weight { get; set; }

        public string? Description { get; set; }

        public Dice Damage { get; set; } = new Dice();

        public IEnumerable<DamageType> DamageTypes { get; set; } = Enumerable.Empty<DamageType>();

        public IEnumerable<WeaponPropertyLink> WeaponProperties { get; set; } = Enumerable.Empty<WeaponPropertyLink>();
    }
}
