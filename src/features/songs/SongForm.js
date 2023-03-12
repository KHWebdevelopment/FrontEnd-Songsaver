import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "./SongsSlice";

const SongForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const song = { id: Date.now(), title, artist, genre, rating };
    dispatch(addSong(song));
    setTitle("");
    setArtist("");
    setGenre("");
    setRating("");
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Song"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="artist"
          value={artist}
          placeholder="Artist"
          onChange={(e) => setArtist(e.target.value)}
        />
        <select 
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="genre">-- Genre --</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Classic">Classic</option>
          <option value="Jazz">Jazz</option>
          <option value="Reggae">Reggae</option>
          <option value="Blues">Blues</option>
          <option value="Country">Country</option>
        </select>
        <select 
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="rating">-- Rating --</option>
          <option value="1">1 ★</option>
          <option value="2">2 ★ </option>
          <option value="3">3 ★ </option>
          <option value="4">4 ★ </option>
          <option value="5">5 ★</option>
        </select>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default SongForm;
