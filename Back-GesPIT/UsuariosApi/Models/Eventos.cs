using System.ComponentModel.DataAnnotations.Schema;

namespace UsuariosApi.Models
{
  [Table("Eventos")]
  public class Eventos
  {
    public int Id { get; set; }
    public string Usuario { get; set; }
    public string Evento { get; set; }
    public DateTime Fecha { get; set; }
    public string Lugar { get; set; }
  }
}
