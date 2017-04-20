using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SettingsTool.Domain.Domain.Models
{
    public class Customers
    {
        public List<ItemModel> Items;
        
        public Customers()
        {
            Items = new List<ItemModel>();
            Items.Add(new ItemModel { Name = "DEZA", Id = 3 });
            Items.Add(new ItemModel { Name = "Workfashion MIGROS", Id = 21 });
        }
                        
    }
}
