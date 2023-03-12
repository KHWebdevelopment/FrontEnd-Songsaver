import { filterBy } from "./SongsSlice";
import { useDispatch } from "react-redux";

const FilterSong = () => {
    const dispatch = useDispatch();

    const Filter = (e) => {
        const select = e.target.value;
        dispatch(filterBy({value: select}))
    }
    
    return (
        <form className="flex">
          <label>Filter by Genre: 
            <select 
              id="genre"
              onChange={(e) => {Filter(e)}}
            >
              <option value="">All</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="Classic">Classic</option>
              <option value="Jazz">Jazz</option>
              <option value="Reggae">Reggae</option>
              <option value="Blues">Blues</option>
              <option value="Country">Country</option>
            </select>
          </label>
          <label> Filter by Rating:
            <select
              id="rating"
              onChange={(e) => {Filter(e)}}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </form>
    )
}

export default FilterSong