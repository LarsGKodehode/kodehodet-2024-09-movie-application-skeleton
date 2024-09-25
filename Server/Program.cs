var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serve the static files from "wwwroot"
// and use "localhost:xxxx/" over "localhost:xxxx/index.html"
app.UseDefaultFiles();
app.UseStaticFiles();

// Movie Listing Capabilities
app.MapGet("/api/v1/movies", () =>
{
  return Results.Ok("All the Movies");
});

// Creating a new Movie
app.MapPost("/api/v1/movies", () =>
{
  return Results.Ok("Created a new movie");
});

// Movie Listing Capabilities
app.MapGet("/api/v1/movies/{id}", (int id) =>
{
  return Results.Ok($"Movie with id: {id}");
});
app.MapPut("/api/v1/movies/{id}", (int id) =>
{
  return Results.Ok($"Updated movie with id: {id}");
});
app.MapDelete("/api/v1/movies/{id}", (int id) =>
{
  return Results.Ok($"Deleted movie with id: {id}");
});

app.Run();
