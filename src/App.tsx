import React, {FC} from 'react';
import {Layout, MovieDetailsPage, MoviesListByFilmNamePage, MoviesList, MoviesListByGenrePage} from "./components";
import {Route, Routes} from "react-router-dom";


const App: FC = () => {
  return (
      <div>
        <Routes>
          <Route path={"/"} element={<Layout/>}>

            <Route path={'/'} element={<MoviesList/>}/>
            <Route path={'/movie/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'/genre/:id'} element={<MoviesListByGenrePage/>}/>
            <Route path={'/byFilmName'} element={<MoviesListByFilmNamePage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;