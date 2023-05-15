/**
 * JWT : secure your api
 * --------------------------------
 * 
 *       Create token 
 * --------------------------------
 * 1. client : after user login send user basic info to create token
 * 2. in the server site : install => npm i jsonwebtoken
 * 3.import jsonwebtoken
 * 4. jwt.sign(payload,secret,{expires})
 * 5. return token to client site
 * 
 * 6. after receiving the token store it either httponly(first best) cookies or localstorage (second best)
 * 7. use a general space onAuthStateChange 
 * 
 * ---------------------------
 * 
 * 
 *        send token to server 
 * --------------------------------
 * 1. for sensitive api call () send authorization headers { authorization : 'Bearer token'}
 * 
----------------------------------



           verify token 
----------------------------------

1. create a function called verifyJWT (middleware)
2. this function will have three params : req,res, next
3. first check whether thr authorization headers exist
4. if not send 401
5. get the token out of the authorization header
6. call jwt.verify(token, secret, (err,decode))
7. if err => send 401
8.if not err => set decoded to the req object so that we can retrieve it later
9. call the next() to go to the next function  

------------------------------===
1. check whether token has the email that matches with the request email 
 */
