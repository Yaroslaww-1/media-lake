﻿namespace MediaLakeCore.BuildingBlocks.Infrastructure.Options
{
    public class AWSOptions
    {
        public const string Location = "AWSOptions";

        public string Environment { get; set; }
        public string Region { get; set; }
    }
}
