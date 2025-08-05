using Microsoft.AspNetCore.Mvc;
using UsuariosApi.Data;
using UsuariosApi.Models;

namespace UsuariosApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuariosContext _context;
        public UsuariosController(UsuariosContext context)
        {
            _context = context;
        }
        [HttpGet("all")]

        public IActionResult GetAll()
        {
            var usuarios = _context.Usuarios.ToList();
            return Ok(usuarios);
        }
        [HttpGet("login")]
        public IActionResult Get(string email, string password)
        {
            var usuario = _context.Usuarios.FirstOrDefault(u => u.Email == email && u.Password == password);
            if (usuario == null)
                return NotFound("Usuario no encontrado");
            return Ok(usuario);
        }
    }
}
