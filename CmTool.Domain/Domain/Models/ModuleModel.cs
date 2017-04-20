    using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SettingsTool.Domain.Domain.Models
{
    
    public class ModuleModel
    {
        public Customers Customers;
        public List<ItemModel> Plattforms;
        //public List<string> 

        public ModuleModel()
        {
            Customers = new Customers();
            Plattforms = new List<ItemModel>();
            Plattforms.Add(new ItemModel { Name = "Integration", Id = 1 });
            Plattforms.Add(new ItemModel { Name = "Produktion", Id = 2 });
            Plattforms.Add(new ItemModel { Name = "Test", Id = 3 });            
        }
    }
}
