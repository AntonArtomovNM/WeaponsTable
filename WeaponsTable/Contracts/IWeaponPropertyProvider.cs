using WeaponsTable.Models;

namespace WeaponsTable.Contracts
{
    public interface IWeaponPropertyProvider
    {
        Task<WeaponProperty> CreateWeaponProperty(WeaponProperty weaponProperty);

        Task<WeaponProperty> UpdateWeaponProperty(WeaponProperty weaponPropertyProperty);

        Task DeleteWeaponProperty(Guid weaponPropertyId);

        Task<WeaponProperty> GetWeaponProperty(Guid weaponPropertyId);

        Task<ICollection<WeaponProperty>> GetWeaponPropertyList();
    }
}
