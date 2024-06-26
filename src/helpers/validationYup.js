import { MdTry } from "react-icons/md";
import { number, object, string } from "yup";

let userSchema = object ({
    name: string().required(),
    phone: number().required().positive().integer(),
    email: string().email().required()


})

    const validateForm =async (dataForm) => {
        try {
            await userSchema.validate(dataForm)
            return { status:"success"}
        } catch (error) {
            return {status:"error", error:error.message}
        }

    }
    export default validateForm