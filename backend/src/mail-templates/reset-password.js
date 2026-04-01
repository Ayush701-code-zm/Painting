/**
 * Reset-password email template.
 * @param {string} resetPasswordUrl
 */
const ResetPassword = (resetPasswordUrl) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Reset Password</title></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:32px">
    <h2 style="color:#333">Reset your password</h2>
    <p style="color:#555">You requested a password reset. Click the link below to set a new password:</p>
    <a href="${resetPasswordUrl}"
       style="display:inline-block;padding:12px 24px;background:#FCC010;color:#000;border-radius:8px;text-decoration:none;font-weight:bold">
      Reset Password
    </a>
    <p style="color:#999;font-size:12px;margin-top:24px">
      This link expires in 10 minutes. If you did not request a password reset, please ignore this email.
    </p>
  </div>
</body>
</html>
`;

module.exports = ResetPassword;
