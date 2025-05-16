import React from 'react';

const Skills = () => {
  const skills = [
    { icon: '⚡', name: 'React / Next.js' },
    { icon: '⚡', name: 'CSS / SCSS' },
    { icon: '⚡', name: 'Node.js' },
  ];

  return (
    <div className="bento-card">
      <h2 className="card-title">Compétences</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span>{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills; 