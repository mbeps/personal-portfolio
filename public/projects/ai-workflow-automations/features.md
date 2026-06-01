## Authentication
- Email/password sign-in and registration
- OAuth via GitHub and Google

## Credentials
- Encrypted API key storage
- Supports OpenAI, Anthropic, Gemini, and OpenRouter providers
- Creation gated to premium users

## Workflows
- Visual node-graph editor with drag-and-drop canvas
- Snap-to-grid layout, minimap, and inline name editing
- Auto-generated slugs and case-insensitive name search
- Creation gated to premium users

## Node Types
- **Triggers:** Manual button, Google Form webhook, Stripe event webhook
- **AI:** Anthropic (Claude Sonnet 4.5), OpenAI (GPT-4), Gemini (2.0 Flash), OpenRouter (NVIDIA Nemotron)
- **Actions:** HTTP request, Discord, Slack

## Executions
- Durable background execution via Inngest
- Workflows run as topologically sorted DAGs
- Nodes share context via Handlebars templates (`{{variableName.text}}`)
- Paginated execution history with per-run output and error inspection

## Subscriptions
- Optional Polar.sh billing integration
- When billing is disabled, all users are treated as premium
