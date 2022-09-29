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
  getOne,
  create,
  deleteOne,
  updateOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.language = "Javascript";
  skills.push(skill)
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function updateOne(id, skill) {
  newSkill = getOne(id);
  newSkill.skill = skill;
}
