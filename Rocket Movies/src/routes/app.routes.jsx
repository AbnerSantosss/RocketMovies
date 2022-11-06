import { Routes, Route } from 'react-router-dom'

import { CreateMovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'
import { MyMovies } from '../pages/MyMovies'
import { Profile } from '../pages/Profile'
import { Singnin } from '../pages/Singnin'
import { SingnUp } from '../pages/SingnUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/mymovies" element={<MyMovies />} />
      <Route path="/createMovie" element={<CreateMovie />} />
      <Route path="/moviepreview" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Singnin />} />
      <Route path="/register" element={<SingnUp />} />
    </Routes>
  )
}
