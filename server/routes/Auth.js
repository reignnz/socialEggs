import jsonwebtoken from 'jsonwebtoken';

const Auth = (req, res, next) => {
    // Alternatively if we add Bearer to the front of the header
    // then we should check if the header has Bearer
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
          if (err) req.user = undefined;
          req.user = decode;
          next();
        });
      } else {
          
        req.user = undefined;
        next();
      } 

}

export default Auth;