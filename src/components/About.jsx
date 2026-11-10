// About component: displays the blog description.
// Receives the about information from App.jsx through props.

function About({
  image = "https://via.placeholder.com/215",
  about,
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;