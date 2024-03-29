﻿using WeaponsTable.Contracts;

namespace WeaponsTable.Entities
{
    public class WeaponProperty : MongoDbEntity
    {
        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

    }
}
