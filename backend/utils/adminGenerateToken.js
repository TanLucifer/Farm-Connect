import jwt from "jsonwebtoken";

export const adminGenerateToken = (admin) => {
    console.log(admin);
    
   return jwt.sign(
      {
         id: admin._id,
         adminname: admin.username,
      },
      process.env.ADMIN_SECRET_KEY,
      {
         expiresIn: "15d", 
      }
   );
};
