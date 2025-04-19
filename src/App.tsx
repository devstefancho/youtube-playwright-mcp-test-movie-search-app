import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-app py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
