const { z } = require('zod');

// Define a schema with a custom refinement for the first character check
const validPass = z.string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .refine((val) => /^[A-Z]/.test(val), {
    message: "Password must start with an uppercase letter",
  });

// Usage example
const input = "Password123";

try {
  validPass.parse(input);
  console.log("Password is valid");
} catch (e) {
  console.error(e.errors); // Will show an error if the password is invalid
}
