## OAuth 2.0 Authentication
The application provides complete OAuth authentication functionality:
- GitHub OAuth 2.0 integration with Spring Security
- Automatic user authentication and authorisation
- Secure callback handling and token exchange
- Error handling for failed authentication attempts

## Simple Email/Password Authentication
- Register using email and password
- Sign in using Email and password
- Checks correct credentials 
- No ability to reset password or send verification email

## JWT Token Management
Token generation and validation:
- Dual-token system with access tokens (15 minutes by default) and refresh tokens (7 days by default)
- Automatic token generation upon successful OAuth login
- Token validation on protected endpoints
- Custom JWT claims with user information (ID, username, email, avatar)
- Token expiry handling and validation

## Token Refresh Mechanism
Token renewal without re-authentication:
- Automatic access token refresh using refresh tokens
- Refresh token rotation for enhanced security
- Token validation before refresh
- Persistent refresh token storage in MongoDB

## Protected API Endpoints
Secure endpoints requiring authentication:
- User profile information retrieval
- Protected data access endpoints
- Action endpoints for authenticated operations
- Request validation using JWT tokens

## Token Invalidation
Session termination:
- Access token invalidation on logout
- Refresh token revocation from database
- Automatic cleanup of expired tokens via MongoDB TTL
- Cookie deletion on logout

## Public Endpoints
Health check endpoints for monitoring:
- Public health check endpoint
- Authentication status verification
- No authentication required
