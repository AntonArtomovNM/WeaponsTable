using Microsoft.AspNetCore.Mvc;
using Serilog;
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
        public async Task<IActionResult> GetWeapons()
        {
            try
            {
                var weapons = await _weaponProvider.GetWeaponList();

                return Ok(weapons);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while retrieving a weapon list: {ex}", ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> CreateWeapon(Weapon weapon)
        {
            try
            {
                var createdWeapon = await _weaponProvider.CreateWeapon(weapon);

                return Ok(createdWeapon);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while creating a weapon: {ex}", ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateWeapon(Weapon weapon)
        {
            try
            {
                var updatedWeapon = await _weaponProvider.UpdateWeapon(weapon);

                return Ok(updatedWeapon);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while updating weapon with id {weaponPropertyId}: {ex}", weapon.Id, ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("{weaponId}")]
        public async Task<IActionResult> DeleteWeapon(Guid weaponId)
        {
            try
            {
                await _weaponProvider.DeleteWeapon(weaponId);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while deleting weapon with id {weaponId}: {ex}", weaponId, ex);

                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        [HttpGet]
        [Route("props")]
        public async Task<IActionResult> GetWeaponProperties()
        {
            try
            {
                var weaponProperties = await _weaponPropertyProvider.GetWeaponPropertyList();

                return Ok(weaponProperties);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while retrieving a weapon properties list: {ex}", ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        [Route("props")]
        public async Task<IActionResult> CreateWeaponProperty(WeaponProperty weaponProperty)
        {
            try
            {
                var createdWeaponProperty = await _weaponPropertyProvider.CreateWeaponProperty(weaponProperty);

                return Ok(createdWeaponProperty);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while creating a weapon property: {ex}", ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("props")]
        public async Task<IActionResult> UpdateWeaponProperty(WeaponProperty weaponProperty)
        {
            try
            {
                var updatedWeaponProperty = await _weaponPropertyProvider.UpdateWeaponProperty(weaponProperty);

                return Ok(updatedWeaponProperty);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while updating weapon property with id {weaponPropertyId}: {ex}", weaponProperty.Id, ex);

                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("props/{weaponPropertyId}")]
        public async Task<IActionResult> DeleteWeaponProperty(Guid weaponPropertyId)
        {
            try
            {
                await _weaponPropertyProvider.DeleteWeaponProperty(weaponPropertyId);
                await _weaponProvider.RemovePropertyLink(weaponPropertyId);
            }
            catch (Exception ex)
            {
                Log.Error("Error occured while deleting weapon property with id {weaponPropertyId}: {ex}", weaponPropertyId, ex);

                return BadRequest(ex.Message);
            }

            return NoContent();
        }
    }
}