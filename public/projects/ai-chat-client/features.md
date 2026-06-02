## Chat Interface & UX
- **Branching conversations** — Edit any message to create sibling branches non-destructively; navigate trees intuitively.
- **Real-time streaming** — Server-Sent Events (SSE) support for text, reasoning tokens (`<Thinking>`), and real-time tool orchestration.
- **Global Search** — Unified interface for searching chats, projects, and assistants with type-based grouping and real-time filtering.
- **Message trees** — Explore alternative conversation paths via interactive branch controls with state persistence across branches.

## AI & Artifacts
- **Artifacts & Canvas** — Sidecar rendering for Markdown, HTML, Mermaid diagrams, and XLSX spreadsheets with persistent edits, AI-driven updates, and export capabilities.
- **Streaming via OpenRouter** — Access multiple LLMs (GPT-4, Claude, Mistral, etc.) with configurable model selection per message.
- **Slash-commands** — Palette-based shortcuts (`/`) to inject pre-defined system or user prompts for rapid templating.
- **KaTeX & Mermaid** — Full support for mathematical notation (KaTeX) and sophisticated diagramming (Mermaid) within the chat and artifact panels.

## Knowledge Bases (RAG)
- **Agentic RAG implementation** — LLM-driven knowledge retrieval where the AI uses specialised tools to query context based on intent.
- **Hybrid Semantic Search** — Combines 2048-dimensional vector embeddings (pgvector) with Postgres Full-Text Search using Reciprocal Rank Fusion (RRF).
- **Multi-format Ingestion** — Automated pipeline for extracting and indexing content from PDFs, Excel spreadsheets, and Markdown/Plain text files.
- **Document Management** — Full lifecycle tracking for indexed documents including token counting and status monitoring.

## Model Context Protocol (MCP)
- **HTTP Transport Integration** — Connect to remote MCP servers via the official TypeScript SDK to extend AI capabilities with custom toolsets.
- **Granular Tool Control** — Searchable tool picker for per-message tool selection and resource management.
- **Default Tooling** — Automatically enable specific tools for chats associated with particular Projects or Assistants.
- **SSRF Protection** — Mandatory URL validation for MCP server registrations to ensure secure communication with remote services.

## Specialised Workflows
- **Transform Workflow** — Multi-step spreadsheet automation engine with SSE-powered execution and manual review/approval gates.
- **Translation Workflow** — Dedicated side-by-side interface for linguistic translation with auto-detection and language swapping.
- **S3-Integrated Processing** — Efficient file handling using presigned S3 URLs passed directly to AI tools, avoiding large payload transfers.

## Authentication & Security
- **Comprehensive Authorisation** — Multi-method login via Email/Password, GitHub/Discord OAuth, and WebAuthn Passkeys.
- **Enhanced Security** — TOTP-based Multi-Factor Authentication (MFA) with secure recovery via backup codes.
- **Session Governance** — Fingerprinted session tracking with a management interface for global session revocation.
- **Global System Prompts** — Per-user preference layer that prepends global instructions across all conversation contexts.

## Collaboration & Organisation
- **Projects** — Group related chats with shared system prompts, knowledge bases, and default tool configurations.
- **Assistants** — Define distinct AI personas with unique avatars and system instructions for re-use across the application.
- **Resource Management** — Centralised management of prompts, knowledge bases, and MCP server configurations.

## Architecture & Persistence
- **Postgres 17 & Drizzle ORM** — Relational data integrity with type-safe schema management.
- **Hybrid State Management** — Optimistic UI updates via Zustand paired with robust Server Action-based persistence.
- **MinIO/S3 Storage** — Secure storage for conversation attachments and RAG documents with controlled access via presigned URLs.
