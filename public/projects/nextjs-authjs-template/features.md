## OAuth 2.0 Authentication
The application provides complete OAuth authentication functionality:
- Google OAuth 2.0 integration with NextAuth
- GitHub OAuth 2.0 integration with NextAuth
- Automatic account linking for OAuth providers
- Automatic email verification for OAuth users
- Separate user flow for OAuth vs. credentials authentication

## Credentials Authentication
Email and password authentication with security features:
- Email and password registration with validation
- Password hashing with bcryptjs (10 salt rounds)
- Email verification required before first login
- Account validation against database
- Prevention of OAuth account conflicts

## Email Verification
Email verification system for new accounts:
- Verification email sent on registration via Resend
- Single-use verification tokens (UUID v4)
- Token expiration (1 hour)
- Automatic verification for OAuth users
- Re-send verification option during login
- Token validation on protected verification page

## Password Reset
Secure password reset functionality:
- Password reset request via email form
- Single-use reset tokens sent via email
- Token expiration (1 hour)
- New password validation (minimum 8 characters)
- Automatic token deletion after successful reset
- Current password verification for password changes

## Two-Factor Authentication (2FA)
Optional email-based two-factor authentication:
- 6-digit random code generation
- Code delivery via email
- Token expiration (15 minutes)
- Per-user 2FA toggle in settings
- Enforced during credential login flow
- Not available for OAuth users

## Role-Based Access Control (RBAC)
User role management and enforcement:
- Two roles: ADMIN and USER (default)
- Server-side role validation via server actions
- Client-side role-based UI hiding with RoleGate component
- API route protection with role checks
- Admin-only endpoints returning 403 for non-admins
- Role changes via settings page

## Session Management
Secure session handling:
- JWT-based sessions for stateless authentication
- Session token stored in httpOnly cookies
- Automatic session refresh on data changes
- Extended session data (role, 2FA status, OAuth flag)
- Callback URL preservation for redirect after login
- Logout with session cleanup

## Protected Routes
Route protection with middleware:
- Authentication-required routes under `(protected)` group
- Automatic redirect to login for unauthenticated users
- Callback URL preservation in redirect
- Prevention of authenticated users accessing auth pages
- Public routes accessible without authentication
- Middleware running on all routes except static assets

## User Profile Management
Profile settings and updates:
- Name, email, and password updates
- Email change with verification flow
- Current password validation before password change
- 2FA toggle in settings
- Role selection (for demonstration)
- OAuth user restrictions (cannot change email/password/2FA)

## Token Management
Secure token generation and validation:
- Verification tokens (UUID v4, 1-hour expiry)
- Password reset tokens (UUID v4, 1-hour expiry)
- Two-factor tokens (6-digit number, 15-minute expiry)
- Automatic deletion of expired tokens
- Single-use token enforcement
- Token validation before operations
