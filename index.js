const express = require("express");
const app = express();
app.use(express.json());

let numberOfRequest = 0;
const projects = [];

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = { id, title, tasks: [] };
  projects.push(project);
  return res.json(project);
});

app.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.tasks.push(title);

  res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.title = title;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex(p => p.id === id);

  projects.splice(project, 1);

  return res.send;
});

app.listen(3000);
