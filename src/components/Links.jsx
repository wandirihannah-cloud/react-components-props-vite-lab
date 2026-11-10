
 // Links component: displays useful navigation links.
 // It receives the links from App.jsx through props.

function Links({ links }) {
  return (
    <footer>
      <h2>Useful Links</h2>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Links;
