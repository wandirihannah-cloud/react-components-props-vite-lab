
import blogData from "../data/blog";
import Header from "./Header";
import Home from "./Home";
import Links from "./Links";

// App component: the main component that connects the blog.
function App() {
  const links = [
    { id: 1, text: "React Documentation", url: "https://react.dev/" },
    { id: 2, text: "GitHub", url: "https://github.com/" }
  ];

  return (
    <div className="App">
      <Header name={blogData.name} image={blogData.image} />

      <Home
        about={blogData.about}
        posts={blogData.posts}
      />

      <Links links={links} />
    </div>
  );
}

export default App;

