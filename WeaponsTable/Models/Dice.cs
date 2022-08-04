using WeaponsTable.Enums.Damage;

namespace WeaponsTable.Models
{
    public class Dice
    {
        public int DiceType { get; set; }

        public int DiceAmount { get; set; }

        public DamageTypeRus DamageType { get; set; }
    }
}
