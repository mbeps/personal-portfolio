## Authentication and Account Management
- Users can sign up using email and password
- Users can log in using email and password
- Users can sign up and log in using third party providers (Google, Microsoft, LinkedIn, GitHub, Discord, Apple)
- Users can log out 
- Users can reset their passwords

## User Interface and Experience
- Users can switch between light and dark mode
- Users can customize the interface to suit their preferences

## Rich Text Notes
- Users can create notes with rich text formatting
- Users can add images and cover images to notes
- Users can publish notes to make them publicly visible
- Users can organize notes into nested notes and notebooks
- Users can manage their notes, including moving to trash, restoring, or permanently deleting

## AI and Model Context Protocol (MCP) Integration
- External AI clients can connect to a stateless MCP server over Streamable HTTP
- Users can authenticate AI agents securely via OAuth 2.1 with PKCE and consent screens
- AI assistants can list active documents, filter by parent notes, and search by title
- AI assistants can retrieve full document notes and their contents by ID 
- AI assistants can create new document notes under root or nested parents
- AI assistants can update document titles, body contents, icons, and publication status
- AI assistants can archive documents and their nested children to trash 
- AI assistants can view all archived documents currently stored in trash
- AI assistants can restore archived documents and nested descendants from trash
- AI assistants can permanently delete document notes from the database 