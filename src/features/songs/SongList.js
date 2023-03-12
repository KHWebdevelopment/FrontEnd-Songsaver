import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { deleteSong } from "./SongsSlice";
import categories from "./categories";

const SongList = () => {
  
  const dispatch = useDispatch();
  const filteredSongs = useSelector((state) => state.songs.filteredSongs);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
  };

  const [result, setResult] = useState({});

  useEffect(() => {
    const category = filteredSongs.map((song) => {
        const group = categories.find((group) => group.category === song.genre);
        return {
            ...song,
            category: group.category,
        };
    });

    const targetResult = {};
    category.forEach((song) => {
        targetResult[song.category] = targetResult[song.category] || [];
        targetResult[song.category].push(song);
      });
      setResult(targetResult);
    }, [filteredSongs]);
    
  return (
    <tbody>
      {React.Children.toArray(
        Object.keys(result).map((category) => {
        return (
          <>
            <tr key={category}>
              <th colSpan={"5"}>{category}</th>
            </tr>
            {React.Children.toArray(
              result[category].map((song) => (
              <>
                <tr key={song.id}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.rating} ★</td>
                  <td>
                    <button onClick={() => handleDelete(song.id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              </>
            )))}
          </>
        );
      }))}
    </tbody>
  );
};

export default SongList