import React, { useState, useEffect, useRef } from 'react';

/**
 * Props:
 * - apiBase: base URL like http://localhost:5000
 * - onSelect(name) optional
 */
export default function SearchBar({ apiBase = 'http://localhost:5000', onSelect = () => {} }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const debRef = useRef(null);

useEffect(() => {
  // clear any pending timeout
  if (debRef.current) clearTimeout(debRef.current);

  debRef.current = setTimeout(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    fetch(`${apiBase}/products/search?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        setSuggestions(data.slice(0, 5));
        setOpen(true);
      })
      .catch(err => {
        console.error(err);
        setSuggestions([]);
      });
  }, 250);

  return () => clearTimeout(debRef.current);
}, [query, apiBase]);


  function handleSelect(name) {
    setQuery(name);
    setOpen(false);
    onSelect(name);
  }

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products..."
        onFocus={() => query && setOpen(true)}
        onBlur={() => setTimeout(()=>setOpen(false), 150)} // small delay to allow click
      />
      {open && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map(s => (
            <li key={s._id || s.name} onClick={() => handleSelect(s.name)}>
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
