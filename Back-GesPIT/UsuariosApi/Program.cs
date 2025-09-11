using UsuariosApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace UsuariosApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

      builder.Services.AddCors(options =>
      {
        options.AddPolicy("PermitirTodo",
            builder => builder
                .AllowAnyOrigin()   // Permite cualquier origen (no recomendado en prod)
                .AllowAnyMethod()   // Permite GET, POST, PUT, DELETE, etc.
                .AllowAnyHeader()); // Permite cualquier header
      });
      builder.Services.AddControllers();
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();


      // Add services to the container.
      builder.Services.AddDbContext<UsuariosContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }


            app.UseCors("PermitirTodo");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
