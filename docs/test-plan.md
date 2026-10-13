| Feature | Scenario   | Expected behavior |
| ------- | ---------- | ----------------- |
| login   | Valid credentials | user logs in successfully |
| login  | incorrect password | login is rejected |
| register | both passwords match and email is not in use | user registers successfully |
| register | email already in use | registration fails |
| register | passwords do not match | registration fails |
| favorite song | logged in user clicks star button | song id is added to users favorite songs|
| favorite artist | logged in user clicks star button | artist id is added to users favorite artists|
| favorite album | logged in user clicks star button | album id is added to users favorite albums|
| favorite button | clicked a second time | favorite is removed from user favorites | 
| view favorites | user has no favorites | displays user has no favorite artist, album, etc |
| view favorites | user has favorites | displays favorites |
| remove favorites | user clicks remove on a favorite | removed from favorites table and is no longer displayed |
| delete user | User deletes account in settings | user is logged out and user is removed from db |
| View songs | user clicks songs | at most 50 songs are displayed on a page|
| View artists | user clicks artists | at most 50 artists are displayed on a page|
| View albums | user clicks albums | at most 50 albums are displayed on a page|
| Authentication | unauthenticated user attempts to access protected route | request is rejected |
| Authorization | User attempts to access another user's favorites | Access is denied |