
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
		<Navbar/>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/*" element={<ErrorPage />} />
		</Routes>
    </BrowserRouter>
  );
}

export default App;
