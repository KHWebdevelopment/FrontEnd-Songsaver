import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import Footer from "../footer/Footer";
import Header from "../header/header";
import { sortAsc, sortDesc, sortNumAsc, sortNumDesc } from "./SongsSlice";
import { useDispatch } from "react-redux";

const SongOverview = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <SongForm />
        <table style={{width: "100%"}}>
          <thead>
            <tr>
              <th>
                Title
                <button onClick={() => dispatch(sortAsc("title"))}>A-Z</button>
                <button onClick={() => dispatch(sortDesc("title"))}>Z-A</button>
              </th>
              <th>
                Artist
                <button onClick={() => dispatch(sortAsc("artist"))}>A-Z</button>
                <button onClick={() => dispatch(sortDesc("artist"))}>Z-A</button>
              </th>
              <th>Genre</th>
              <th>
                Rating
                <button onClick={() => dispatch(sortNumAsc("rating"))}>1-5</button>
                <button onClick={() => dispatch(sortNumDesc("rating"))}>5-1</button>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <SongList />
        </table>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SongOverview;
