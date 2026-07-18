import { experience, personalInfo, projects, skills } from "../src/data/data.js";

const failures = [];
const isRecord = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

const requireText = (value, path) => {
  if (typeof value !== "string" || !value.trim()) {
    failures.push(`${path} must be non-empty text`);
    return false;
  }
  return true;
};

const requireRecord = (value, path) => {
  if (!isRecord(value)) {
    failures.push(`${path} must be an object`);
    return false;
  }
  return true;
};

const validateUrl = (value, path) => {
  if (value == null) return;
  if (typeof value !== "string") {
    failures.push(`${path} must be an HTTP(S) URL or null`);
    return;
  }
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
  } catch {
    failures.push(`${path} must be an HTTP(S) URL or null`);
  }
};

const validateTextArray = (value, path, minimum = 1) => {
  if (!Array.isArray(value)) {
    failures.push(`${path} must be an array`);
    return false;
  }
  if (value.length < minimum) failures.push(`${path} must contain at least ${minimum} item${minimum === 1 ? "" : "s"}`);
  value.forEach((item, index) => requireText(item, `${path}[${index}]`));
  return true;
};

if (requireRecord(personalInfo, "personalInfo")) {
  ["name", "title", "location", "availability", "email", "github", "linkedin"].forEach((field) => requireText(personalInfo[field], `personalInfo.${field}`));
  validateUrl(personalInfo.github, "personalInfo.github");
  validateUrl(personalInfo.linkedin, "personalInfo.linkedin");
}

const slugs = new Set();
if (!Array.isArray(projects)) {
  failures.push("projects must be an array");
} else if (!projects.length) {
  failures.push("projects must contain at least one project");
} else {
  projects.forEach((project, index) => {
    const base = `projects[${index}]`;
    if (!requireRecord(project, base)) return;

    ["slug", "name", "subtitle", "year", "blurb", "description"].forEach((field) => requireText(project[field], `${base}.${field}`));
    if (typeof project.slug === "string") {
      if (slugs.has(project.slug)) failures.push(`${base}.slug duplicates "${project.slug}"`);
      slugs.add(project.slug);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) failures.push(`${base}.slug must be URL-safe kebab-case`);
    }
    validateUrl(project.link, `${base}.link`);
    validateUrl(project.repo, `${base}.repo`);
    validateTextArray(project.metrics, `${base}.metrics`);
    validateTextArray(project.tech, `${base}.tech`, 2);

    const studyPath = `${base}.caseStudy`;
    if (!requireRecord(project.caseStudy, studyPath)) return;
    const study = project.caseStudy;
    ["type", "eyebrow", "challenge", "system", "ownership", "constraint", "reflection", "evidenceNote", "outcome"].forEach((field) => requireText(study[field], `${studyPath}.${field}`));
    validateTextArray(study.decisions, `${studyPath}.decisions`, 2);
    validateTextArray(study.flow, `${studyPath}.flow`, 3);

    if (!Array.isArray(study.artifacts)) {
      failures.push(`${studyPath}.artifacts must be an array`);
    } else if (!study.artifacts.length) {
      failures.push(`${studyPath}.artifacts must explicitly describe available or unavailable evidence`);
    } else {
      const artifactLabels = new Set();
      study.artifacts.forEach((artifact, artifactIndex) => {
        const artifactPath = `${studyPath}.artifacts[${artifactIndex}]`;
        if (!requireRecord(artifact, artifactPath)) return;
        requireText(artifact.type, `${artifactPath}.type`);
        if (requireText(artifact.label, `${artifactPath}.label`)) {
          if (artifactLabels.has(artifact.label)) failures.push(`${artifactPath}.label duplicates "${artifact.label}" within this project`);
          artifactLabels.add(artifact.label);
        }
        requireText(artifact.note, `${artifactPath}.note`);
        validateUrl(artifact.href, `${artifactPath}.href`);
      });
    }
  });
}

if (!Array.isArray(experience)) {
  failures.push("experience must be an array");
} else if (!experience.length) {
  failures.push("experience must contain at least one role");
} else {
  experience.forEach((role, index) => {
    const rolePath = `experience[${index}]`;
    if (!requireRecord(role, rolePath)) return;
    ["role", "company", "location", "period"].forEach((field) => requireText(role[field], `${rolePath}.${field}`));
    if ("project" in role && role.project != null) requireText(role.project, `${rolePath}.project`);
    validateTextArray(role.highlights, `${rolePath}.highlights`);
  });
}

if (!Array.isArray(skills)) {
  failures.push("skills must be an array");
} else if (!skills.length) {
  failures.push("skills must contain at least one category");
} else {
  const categories = new Set();
  skills.forEach((group, index) => {
    const groupPath = `skills[${index}]`;
    if (!requireRecord(group, groupPath)) return;
    if (requireText(group.category, `${groupPath}.category`)) {
      if (categories.has(group.category)) failures.push(`${groupPath}.category duplicates "${group.category}"`);
      categories.add(group.category);
    }
    validateTextArray(group.items, `${groupPath}.items`);
    if (Array.isArray(group.items) && new Set(group.items).size !== group.items.length) failures.push(`${groupPath}.items must not contain duplicates`);
  });
}

if (failures.length) {
  console.error(`Content validation failed with ${failures.length} issue${failures.length === 1 ? "" : "s"}:`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Content validation passed: ${projects.length} projects, ${experience.length} roles, ${skills.length} skill groups, ${slugs.size} unique case-study routes.`);
}
