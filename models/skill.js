const skills = [
    {skill: "OOP", language: "javascript", id: 001},
    {skill: "Data structures and algorithms", language: "javascript", id: 002},
    {skill: "Web development", language: "javascript", id: 003},
    {skill: "Git version control", language: "javascript", id: 004},
    {skill: "Text-editors", language: "javascript", id: 005},
    {skill: "Full-stack development", language: "javascript", id: 006},
  ];

  module.exports = {
    getAll,
    getOne
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
