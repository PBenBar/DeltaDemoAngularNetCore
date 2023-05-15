using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PaulBencomoDeltaDemo.Model;

namespace PaulBencomoDeltaDemo.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : Controller
    {
        private static List<Customer> _customers;


        private readonly ILogger<CustomerController> _logger;
        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetList")]
        public IEnumerable<Customer> GetList()
        {
            if (_customers == null)   //load default data
            {
                _customers = new List<Customer>();
                _customers.Add(new Customer() { Id = 1, Email="demo@mail.com", Name="First",Notes="Looking for services", Telephone="2356845951"});
                _customers.Add(new Customer() { Id = 2, Email="demo2@mail.com", Name="Second",Notes="Looking for services", Telephone="2356845952"});
                _customers.Add(new Customer() { Id = 3, Email="demo3@mail.com", Name="Third",Notes="Looking for services", Telephone="2356845953"});
            }
            

                return _customers;
        }


        [HttpPost]
        [Route("Create")]
        public bool Create(Customer Model)
        {
            try
            {
                Model.Id = _customers.Max(x => x.Id) + 1;

                _customers.Add(Model);
                return true;


            }   catch(Exception ex)
            {
                return false;
            }

        }
    }
}
