const z = require("zod");

const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

module.exports = { RegisterSchema, LoginSchema };
