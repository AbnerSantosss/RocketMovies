import { Routes, Route } from 'react-router-dom'

import { Singnin } from '../pages/Singnin'
import { SingnUp } from '../pages/SingnUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Singnin />} />
      <Route path="/register" element={<SingnUp />} />
    </Routes>
  )
}
