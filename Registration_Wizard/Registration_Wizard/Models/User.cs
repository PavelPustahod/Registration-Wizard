using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Registration_Wizard.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Salutation { get; set; }
        [Required]
        public string Name { get; set; }
        public string MiddleName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Company { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Mobile { get; set; }
        [Required]
        public bool FinanceRemit { get; set; }
        [Required]
        public bool EngineerAll { get; set; }
        [Required]
        public bool EngineerLaunch { get; set; }
        [Required]
        public bool EngineerTrip { get; set; }
        [Required]
        public bool EngineerRead { get; set; }
        public string Comment { get; set; }
        [Required]
        public string Country { get; set; }
        public string OfficeName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string PostalCode { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}