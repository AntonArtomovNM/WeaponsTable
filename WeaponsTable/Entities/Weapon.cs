using WeaponsTable.Contracts;
using WeaponsTable.Enums;
using WeaponsTable.Models;

namespace WeaponsTable.Entities
{
    public class Weapon : MongoDbObject
    {
        public string Name { get; set; } = string.Empty;

        public WeaponType WeaponType { get; set; }

        public bool IsExotic { get; set; }

        public Money Price { get; set; } = new Money();

        public float Weight { get; set; }

        public string? Description { get; set; }

        public Dice? Damage { get; set; }

        public IEnumerable<DamageType>? DamageTypes { get; set; }

        public IEnumerable<WeaponPropertyLink> WeaponProperties { get; set; } = Enumerable.Empty<WeaponPropertyLink>();
    }
}
