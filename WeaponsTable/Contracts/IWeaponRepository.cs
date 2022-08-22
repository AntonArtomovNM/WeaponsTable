using WeaponsTable.Entities;

namespace WeaponsTable.Contracts
{
    public interface IWeaponRepository : IRepository<Weapon>
    {
        Task RemovePropertyLink(Guid propertyId);
    }
}
