# dash-auth
Used to authenticate with an xbox account for dash

# Installation
`npm install @pyrondev/dash-auth`
# Usage
Get the xsts token of an xbox account using username and password

## Javascript (async)
```js
const { dashAuthenticate } = require("@pyrondev/dash-auth");
(async () => {
	const dashAuth = await dashAuthenticate("email", "password");
	console.log(`XBL3.0 x=${dashAuth.user_hash};${dashAuth.xsts_token}`);
})(); // Async function needed so nodejs doesnt complain about the await
```
## Javascript
```js
const { dashAuthenticate } = require("@pyrondev/dash-auth");
dashAuthenticate("email", "password").then(dashAuth => {
	console.log(`XBL3.0 x=${dashAuth.user_hash};${dashAuth.xsts_token}`);
});
```
