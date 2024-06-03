import jwt from "jsonwebtoken";

export default async function generateTokenAndSetCookie(adminId, res) {
  const token = jwt.sign({ adminId }, "12345", {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
}
