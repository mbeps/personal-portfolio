This directory is dedicated to enums across the project. These enums are useful as they are used to avoid hard-coding these values, getting autocompletion support and avoiding typoes. 

For example, if a project has skills, `SkillKeysEnum` values are listed within them. If strings for the skills were listed directly, then typos would cause these skills from not being found; for example if a project has a skill `react` but it was spelt as `rect` then the project no be able to display `React` as the key `rect` is not associated with any skills. These typos are handled by using Enums as if there is a typo the editor would show a warning and the project would not build. 