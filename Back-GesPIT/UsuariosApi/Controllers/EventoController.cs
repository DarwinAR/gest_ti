using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsuariosApi.Data;
using UsuariosApi.Models;

namespace UsuariosApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class EventoController: ControllerBase
  {
    private readonly UsuariosContext _context;

    public EventoController(UsuariosContext context)
    {
      _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<Eventos>> PostEvento(Eventos evento)
    {
      _context.Evento.Add(evento);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetEvento), new { id = evento.Id }, evento);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Eventos>> GetEvento(int id)
    {
      var evento = await _context.Evento.FindAsync(id);

      if (evento == null)
        return NotFound();

      return evento;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Eventos>>> GetEventos()
    {
      return await _context.Evento.ToListAsync();
    }

  }
}
