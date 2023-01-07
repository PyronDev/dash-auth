# dash-auth
Used to authenticate with an xbox account for dash

# Installation
`npm install @pyrondev/dash-auth`
# Usage

## Javascript
Get the xsts token of an xbox account using username and password
```js
const { dashAuthenticate } = require("@pyrondev/dash-auth");
(async () => {
	const dashAuth = await new dashAuthenticate("email", "password");
	console.log(`XBL3.0 x=${dashAuth.user_hash};${dashAuth.xsts_token}`);
})(); // Async function needed so nodejs doesnt complain about the await
```
