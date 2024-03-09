import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import blogs from './Pages/Blog/directory';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
        {blogs.map(
          ({ component: Component, slug, title, publishedDate }, index) => (
            <Route
              exact
              path={slug}
              element={
                <Component
                  title={title}
                  publishedDate={publishedDate}
                  slug={slug}
                />
              }
              key={index}
            />
          )
        )}
      </Routes>
    </Router>
  );
}

export default App;
