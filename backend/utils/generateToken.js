import jwt from "jsonwebtoken";

export const generateToken = (user) => {
   return jwt.sign(
      {
         id: user._id,
         email: user.email,
         username: user.username,
      },
      process.env.SECRET_KEY,
      {
         expiresIn: "15d", 
      }
   );
};
