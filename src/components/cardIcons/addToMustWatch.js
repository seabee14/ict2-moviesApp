import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";

const AddToMustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleAddToMustWatch = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie);
    };
    return (
      <IconButton aria-label="add to favorites" onClick={handleAddToMustWatch}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };
  
  export default AddToMustWatchIcon;