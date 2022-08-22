using WeaponsTable.Entities;

namespace WeaponsTable.Contracts
{
    public interface IWeaponProvider
    {
        Task<Weapon> CreateWeapon(Weapon weapon);
         
        Task<Weapon> UpdateWeapon(Weapon weapon);

        Task RemovePropertyLink(Guid propertyId);

        Task DeleteWeapon(Guid weaponId);

        Task<Weapon?> GetWeapon(Guid weaponId);

        Task<ICollection<Weapon>> GetWeaponList();
    }
}
