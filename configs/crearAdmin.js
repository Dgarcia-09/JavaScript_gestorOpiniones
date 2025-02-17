import User from "../src/user/user.model.js"
import {hash} from "argon2"

const createAdmin = async () => {
    try {
      const aEmail = "admin@gmail.com"
      const aPassword = "admin123"
  
      const existingAdmin = await User.findOne({ email: aEmail })
  
      if (!existingAdmin) {
        const encryptedPassword = await hash(aPassword);
  
        const aUser = new User({
          name: "Admin",
          surname: "Admin",
          username: "admin1",
          email: aEmail,
          phone: "24354657",
          password: encryptedPassword,
          role: "ADMIN_ROLE",
        });
  
        await aUser.save()
        console.log("El admin por defecto se ha creado exitosamente")

      } else {
        console.log("Ya existe un admin")
      }
    } catch (err) {
      console.error("Error al crear el admin por defecto:", err)
    }
  };
  
  export default createAdmin;