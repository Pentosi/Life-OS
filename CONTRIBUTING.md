# Contributing to Life OS

Thank you for your interest in contributing to Life OS.

This project is designed to remain clean, scalable, secure, and maintainable over the long term. Please follow the guidelines below to help keep the codebase consistent.

---

## Development Setup

1. Clone the repository.
2. Install dependencies.

```bash
npm install
```

3. Copy the environment template.

```bash
cp .env.example .env
```

4. Fill in the required environment variables.

5. Start the development server.

```bash
npm run dev
```

---

## Branch Naming

Use the following branch naming convention:

* `feature/<feature-name>`
* `fix/<issue-name>`
* `refactor/<module-name>`
* `docs/<topic>`
* `chore/<task>`

Examples:

* `feature/dashboard`
* `feature/tasks`
* `fix/auth-session`
* `refactor/router`
* `docs/readme`

---

## Commit Convention

Follow the Conventional Commits specification.

Examples:

* `feat(auth): add Google sign-in`
* `fix(router): preserve query parameters`
* `docs(readme): improve setup instructions`
* `refactor(ui): simplify sidebar layout`
* `chore(deps): update dependencies`

---

## Coding Standards

* Use TypeScript.
* Prefer reusable components.
* Keep components small and focused.
* Avoid duplicated logic.
* Follow the existing architecture.
* Write meaningful names for files, functions, and variables.
* Document important design decisions.

---

## Pull Requests

Before opening a pull request:

* Ensure the project builds successfully.
* Run linting.
* Run tests (when available).
* Update documentation if needed.
* Keep pull requests focused on a single purpose.

---

## Documentation

Any architectural or feature changes should be reflected in the appropriate files inside the `docs/` directory.
