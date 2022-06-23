import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Issue from './Pages/Issues'

import './styled.scss'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/issue/:user/:repos" element={<Issue />} />
            </Routes>
        </Router>
    )
}

export default App;
