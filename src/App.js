import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleList from "./pages/ArticleList";
import ArticlePage from "./pages/ArticlePage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticleList} />
        <Route path="/article-page" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
