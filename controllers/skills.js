const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
}

function index (req, res) {
    res.render("skills/index", {
        skills: Skill.getAll(),
    })
}

function show (req, res) {
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id),
        title: "Skills",
    })
}

function newSkill(req, res) {
    res.render("skills/new", {
        title: "Add a new skill"
    })
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect("/skills");
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect("/skills");
}

function edit(req, res) {
    res.render("skills/edit", {
        title: "Edit skill",
        skill: Skill.getOne(req.params.id),
    })
}

function update(req, res) {
    Skill.updateOne(req.params.id, req.body.skill);
    res.redirect(`/skills/${req.params.id}`);
  }
