/**
 * OTP verification email.
 * @param {string} otp
 */
const OtpMail = (otp) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Your OTP</title></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:32px;text-align:center">
    <h2 style="color:#333">Your One-Time Password</h2>
    <p style="color:#555">Use the code below to complete your verification. It expires in 10 minutes.</p>
    <div style="font-size:2.5rem;font-weight:bold;letter-spacing:0.5rem;color:#FCC010;margin:24px 0">
      ${otp}
    </div>
    <p style="color:#999;font-size:12px">If you did not request this code, please ignore this email.</p>
  </div>
</body>
</html>
`;

module.exports = OtpMail;
