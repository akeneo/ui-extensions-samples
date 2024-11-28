/*
 For simplicity, we acquire a new token before each API call.
 This is not recommended to do the same in production. 
 
 Benefit from the 1 hour validity of the access_token and leverage the refresh_token grant type.
 Explore the official PIM API documentation for details https://api.akeneo.com/documentation/authentication.html

*/

appAccessToken = pm.environment.get("app_access_token")
if (appAccessToken!==undefined) {
    pm.environment.set("pim_access_token", appAccessToken)
    console.log("Used the token provided in the \"app_access_token\" variable instead of authenticating with the PIM.")
    return
}

base64ClientIdSecret = require('btoa')(pm.environment.get("clientId") + ':' + pm.environment.get("secret"))

pm.sendRequest({
    url: pm.environment.get("baseUrl").replace(/\/$/, '') + '/api/oauth/v1/token',
    method: 'POST',
    header: {
        'Authorization': 'Basic ' + base64ClientIdSecret,
        'Content-Type': 'application/json',
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify(
            {
                "username" : pm.environment.get("username"),
                "password" : pm.environment.get("password"),
                "grant_type": "password"
            }
        )
    }
}, function (err, res) {
    if(err !== null ){
        console.error("The following error occured during pre-script execution");
        console.error(err);
        return;
    }
    console.warn("For simplicity, we acquire a new token before each API call, this is not recommended in production. Benefit from the 1 hour validity of the access_token.");
    pm.environment.set("pim_access_token", res.json().access_token);
});