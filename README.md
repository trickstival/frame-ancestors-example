# Frame Ancestors Example

This repository contains an example using the `Content-Security-Policy` header
with the frame-ancestors directive.

`server1.js` embeds `server2.js` response in an iframe.
In chrome, server1 refuses to connect to server2, even though the path is right,
while firefox takes the full path into account.
