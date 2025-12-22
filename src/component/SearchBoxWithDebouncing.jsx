import { useEffect, useState } from "react";

const API_KEY = "YOUR_OMDB_API_KEY";

function SearchBoxWithDebouncing() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  // 🔹 API call
  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      setError("");
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${debouncedQuery}&apikey=${API_KEY}`
        );
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError("No results found");
        }
      } catch (err) {
        setError("Something went wrong");
      }

      setLoading(false);
    };

    fetchMovies();
  }, [debouncedQuery]);

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <input
        type="text"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <strong>{movie.Title}</strong> ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBoxWithDebouncing;
