import React from 'react';
import './projects.css';


const projects = [
  {
    id: 1,
    title: 'The Daily Schedule',
    githubLink: 'https://github.com/prnessy23/The-Daily-Schedule',
    img: "https://raw.githubusercontent.com/prnessy23/The-Daily-Schedule/main/Assets/Images/Screenshot%202023-01-09%20at%205.12.52%20PM.png"
  },
  {
    id: 2,
    title: 'The Weather',
    githubLink: 'https://github.com/prnessy23/Weather-app',
    img: "https://raw.githubusercontent.com/prnessy23/Weather-app/main/Screenshot%202023-01-11%20at%2011.13.30%20PM.png"
  },
  {
    id: 3,
    title: 'Team Profile Generator',
    githubLink: 'https://github.com/prnessy23/team-profile-generator',
    img: "https://raw.githubusercontent.com/prnessy23/team-profile-generator/main/images/Screenshot%202023-01-30%20at%209.58.43%20PM.png"
  },
  {
    id: 4,
    title: 'The Note Taker',
    githubLink: 'https://github.com/prnessy23/note-taker',
    img: "https://raw.githubusercontent.com/prnessy23/note-taker/main/images/Screenshot%202023-02-02%20at%203.49.32%20PM.png"
  },
  {
    id: 5,
    title: 'Need a Password?',
    githubLink: 'https://github.com/prnessy23/-Need-a-Password-',
    img:"https://github.com/prnessy23/-Need-a-Password-/raw/main/Password/Password.png"
    
    
    
  },
  {
    id: 6,
    title: 'Nibble Nabble',
    githubLink: 'https://github.com/prnessy23/Nibble-Nabble',
    img: "https://raw.githubusercontent.com/prnessy23/Nibble-Nabble/main/assets/images/homepageimage.png"
  },


];
function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: "30px",
        // backgroundColor: "red"
      }}>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img style={{ width: "400px" }} src={project.img} alt="project"></img>
            <p><a href={project.githubLink}>View on GitHub</a></p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Portfolio;