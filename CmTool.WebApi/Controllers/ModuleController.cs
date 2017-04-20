using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using CmTool.Domain.Models;
using SettingsTool.Domain.Domain.Models;

namespace CmTool.WebApi.Controllers
{
    public class ModuleController : ApiController
    {
        public ModuleModel Get()
        {
            //var rep = new 
            return new ModuleModel();
        }
        
        public string Get(int id)
        {
            return "Hallo";
        }

        public void Post([FromBody]string value)
        {
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }


    }
}