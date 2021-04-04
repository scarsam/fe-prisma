import { userValidationSchema } from "../validation/userValidation";
import { sessionValidationSchema } from "../validation/sessionValidation";

export type UserValidationTypes = typeof userValidationSchema;
export type SessionValidationTypes = typeof sessionValidationSchema;
