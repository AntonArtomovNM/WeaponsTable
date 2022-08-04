using Microsoft.AspNetCore.Mvc;
using WeaponsTable.Contracts;
using WeaponsTable.Models;

namespace WeaponsTable.Controllers
{
    [ApiController]
    [Route("[controller]/weapons")]
    public class DataController : ControllerBase
    {
        private readonly IWeaponProvider _weaponProvider;
        private readonly IWeaponPropertyProvider _weaponPropertyProvider;

        public DataController(IWeaponProvider weaponProvider, IWeaponPropertyProvider weaponPropertyProvider)
        {
            _weaponProvider = weaponProvider;
            _weaponPropertyProvider = weaponPropertyProvider;
        }

        [HttpGet]
        public async Task<ICollection<Weapon>> GetWeapons()
        {
            return await _weaponProvider.GetWeaponList();
        }

        [HttpGet]
        [Route("{weaponId}")]
        public async Task<Weapon?> GetWeapon(Guid weaponId)
        {
            return await _weaponProvider.GetWeapon(weaponId);
        }

        [HttpPut]
        public async Task<Weapon> CreateWeapon(Weapon weapon)
        {
            return await _weaponProvider.CreateWeapon(weapon);
        }

        [HttpPost]
        public async Task<Weapon> UpdateWeapon(Weapon weapon)
        {
            return await _weaponProvider.UpdateWeapon(weapon);
        }

        [HttpDelete]
        [Route("{weaponId}")]
        public async Task DeleteWeapon(Guid weaponId)
        {
            await _weaponProvider.DeleteWeapon(weaponId);
        }

        [HttpGet]
        [Route("props")]
        public async Task<ICollection<WeaponProperty>> GetWeaponPropertiess()
        {
            return await _weaponPropertyProvider.GetWeaponPropertyList();
        }

        [HttpPut]
        [Route("props")]
        public async Task<WeaponProperty> CreateWeaponProperty(WeaponProperty weaponProperty)
        {
            return await _weaponPropertyProvider.CreateWeaponProperty(weaponProperty);
        }

        [HttpPost]
        [Route("props")]
        public async Task<WeaponProperty> UpdateWeaponProperty(WeaponProperty weaponProperty)
        {
            return await _weaponPropertyProvider.UpdateWeaponProperty(weaponProperty);
        }

        [HttpDelete]
        [Route("props/{weaponPropertyId}")]
        public async Task DeleteWeaponProperty(Guid weaponPropertyId)
        {
            await _weaponPropertyProvider.DeleteWeaponProperty(weaponPropertyId);
            await _weaponProvider.RemovePropertyLink(weaponPropertyId);
        }
    }
}