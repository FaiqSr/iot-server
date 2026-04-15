import bcrypt from "bcrypt";

export async function hashPassword(password: string, salt: number = 10): Promise<string> {
  const result = await bcrypt.hash(password, salt);
  return result;
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  const result = await bcrypt.compare(password, hash);
  return result;
}
