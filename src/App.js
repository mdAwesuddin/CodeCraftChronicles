import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Scrollcomp from "./components/Scrollcomp";
import BlogsProvider from "./Context";
import Beyondwork from "./pages/Beyondwork";

function App() {
  return (
    <BlogsProvider>
    <Router>
      <Scrollcomp/>
      <Navbar/>
    <div className='max-w-screen-xl mx-auto pt-20 min-h-screen container '>
    <Routes>
       <Route path='/' element={<Home />}  />
       <Route path='/about' element={<About />}  />
       <Route path='/articles-list' element={<ArticlesList />}  />
       <Route path='/article/:name' element={<Article />}  />
       <Route path='/😊' element={<Beyondwork />}  />
       <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
    </BlogsProvider>
  );
}

export default App;
