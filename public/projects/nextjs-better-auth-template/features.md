## Email & Password Auth
- Sign-up enforces email verification, handles password resets, and captures custom profile data.
- Email changes require confirmation, and password updates can optionally revoke other sessions.
- Forms stay consistent thanks to shared validation and toast feedback.

## Social OAuth
- GitHub and Discord logins provide quick onboarding and automatically map profile data.
- Users can link or unlink providers to reuse social accounts across sessions.
- OAuth buttons share a familiar look with provider icons for clarity.

## Passkeys
- Silent WebAuthn attempts sign users in automatically, with manual prompts as a fallback.
- Passkey management lets users add or delete secure passwordless credentials at any time.
- Passkeys integrate with the rest of the auth stack so sign-in states stay in sync.

## Two-Factor Authentication
- TOTP enrollment walks users through QR codes, password confirmation, and backup codes.
- Challenges support both authenticator apps and one-time backup codes.
- Redirect flows ensure two-factor prompts only appear when the session truly needs them.

## Session Management
- Dashboards list every active session, highlight the current device, and allow one-click revocation.
- Admins can revoke any user session, while end users can prune their own.
- Cookie caching keeps session reads fast even during rapid navigation.

## Account Controls
- Profile updates cover name, email, and custom fields while sending confirmation emails when necessary.
- Linked-account management connects or disconnects OAuth providers on demand.
- Users can trigger password setup flows even if they originally joined with OAuth.

## Organization Workspace
- Users create or join organizations, switch contexts, invite team members, and cancel pending invites.
- Invitations can be accepted or rejected, instantly updating the active organization.
- Role-based badges clarify ownership, admin, and member capabilities throughout the UI.

## Admin Console
- Admins gain dashboards for listing users, impersonating, banning, unbanning, and deleting accounts.
- Session revocation and user removal actions run behind confirmation prompts with toast feedback.
- A floating indicator reminds admins when they are impersonating and offers a quick exit.

## Transactional Email Automations
- Welcome, verification, password reset, delete-account, and organization invite emails send automatically.
- Each flow includes HTML and plain-text templates plus clear call-to-action copy.
- Environment-driven configuration keeps credentials and sender details out of the codebase.
