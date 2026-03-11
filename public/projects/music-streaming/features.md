## **Authentication**
- Sign up with email and password.
- Log in with email and password.
- OAuth sign-in via Google and GitHub.
- Password reset functionality.
- Protected routes for authenticated users.

## **Music Discovery & Search**
- Browse all available songs.
- Browse all available albums with tracklistings.
- Browse all available artists with complete discographies.
- View detailed album pages with full track information.
- View detailed artist pages with all their releases.
- Title-based search across all entity types.
- Filter search results by Songs, Albums, or Artists.
- Intuitive search interface with tabs for easy navigation.

## **Playlists & Favourites**
- Create custom playlists.
- Rename existing playlists.
- Delete playlists.
- Add songs to playlists.
- Remove songs from playlists.
- Drag-and-drop song reordering within playlists.
- Dedicated "Favourites" playlist for liked songs.
- One-click favourite interaction via heart icon.
- View favourite tracks in a dedicated page.

## **User Profile Management**
- View account information including display name, email, and sign-in method.
- Update profile display name with real-time feedback.
- Upload, update, and delete profile avatars (stored in self-cleaning Supabase 'images' bucket).
- Change account password with current-password verification (for email-authenticated users).
- Persistent session management with redirection from protected routes.
- Mobile-first responsive design for all account settings.
- Tabbed interface for granular control over Profile and Security settings.
- Automatic avatar cleanup in storage when a user profile is deleted.

## **Playback**
- Persistent global media player that remains active during navigation.
- Play and pause controls.
- Skip to next track.
- Skip to previous track.
- Stop playback.
- Seek scrubbing through tracks.
- Volume control.
- Active queue management with reordering, "Play Next", and "Add to Queue" capabilities.
- Song details panel showing current track information.
- Multi-tab player (Player, Queue, Playlist, Details) for granular control.
- Dedicated Queue tab with a list view and standardized navigation.
- Shuffle and three repeat modes (off, all, one); repeat button hides when the player is minimised on mobile.
- Persistent playback state across route changes.

## **Content Management**
- Upload songs with album and artist metadata.
- Rename uploaded songs.
- Delete uploaded songs.
- Create new albums during song upload.
- Rename albums.
- Delete albums.
- Create new artists during song upload.
- Rename artists.
- Delete artists.
- Manage ownership of all created content.