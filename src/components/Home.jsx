
import About from "./About";
import ArticleList from "./ArticleList";

// Home component: displays the blog introduction and article list.
// It connects the About and ArticleList components.
function Home({ about, posts }) {
  return (
    <main>
      <About about={about} />
      <ArticleList posts={posts} />
    </main>
  );
}

export default Home;
