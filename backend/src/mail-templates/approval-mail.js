/**
 * Welcome / approval email for new employees.
 * @param {string} email
 * @param {string} name
 * @param {string} password - Initial plain-text password (generated, not user-chosen)
 */
const ApprovalMail = (email, name, password) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Welcome</title></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:32px">
    <h2 style="color:#333">Welcome, ${name}!</h2>
    <p style="color:#555">Your account has been approved. Here are your login credentials:</p>
    <table style="border-collapse:collapse;margin:16px 0">
      <tr>
        <td style="padding:8px;font-weight:bold;color:#333">Email / Mobile:</td>
        <td style="padding:8px;color:#555">${email}</td>
      </tr>
      <tr>
        <td style="padding:8px;font-weight:bold;color:#333">Password:</td>
        <td style="padding:8px;color:#555">${password}</td>
      </tr>
    </table>
    <p style="color:#e53e3e;font-size:13px">Please change your password immediately after your first login.</p>
  </div>
</body>
</html>
`;

module.exports = ApprovalMail;
