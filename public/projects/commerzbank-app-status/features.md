## Authentication & Authorisation 
- Users can sign in using email/password
- Users can sign in using Microsoft Entra 
- Users can log out
- Users can view their profiles 
- Admins can manage applications based on Entra roles 

## Viewing App Status
- Users are able to view default apps status' on the home page
- Users are able to view personal subscriptions app status' 
- Users are ble to view group app status' 
- Users are able to open more information about apps and view details such as open tickets, entry in Architecture App, etc.
- Users can view an overview for the apps (how many are healthy, warning, or critical)

## Personal Subscriptions
- Users able to subscribe and unsubscribe from monitoring apps for personal list
- Users are able to view a list of apps that they subscribed to

## Groups
- Users are able to view a list of groups that they are members of
- Users are able to create create and delete groups that they are creators/admin of
- Users are able to add/remove members to/from the groups they are creators/admin for
- Users are able to make members of their groups into admins or remove admins
- Users able to subscribe and unsubscribe from monitoring apps for personal list
- Users are able to view list of applications the group is subscribed to

## Admin Controls
### App Management
- Admins are able to add apps based on unique identifier (fetched from ServiceNow)
- Admins are able to bulk add apps based on unique identifier (fetched from ServiceNow)
- Admins are able to manually add apps by inputting name and ID if app is not available in ServiceNow
- Admins are able to remove apps 
- Admins are able to manually update apps by re-fetching info from ServiceNow

### Schedule Management
- Admins are able to enable or disable scheduler 
- Admins are able to change the update frequency 
- Admins are able to change the batch size 
- Admins are able to manually update all apps before scheduler polls 

## System Messages
- Admins can set messages of various types (banners, toast and dialogs), with titles and messages, and severty (info, success, warning, error)
- Admins can set banners of various severty  that will be displayed in all the main pages
- Admins can set dialogs of various severty that will pop up when visiting the site
- Admins can set toast messages of various severty that will be displayed in all the main pages
- Admins can set these to be dismissble and whether to show once or not
- Admins can modify the messages
- Admins can enable or disable the messages
- Admins can remove the messages

### Others
- Admins can edit the contact details that are shown in the about page
- Admins can view versions for the system such as app version, Node version, React version, etc.