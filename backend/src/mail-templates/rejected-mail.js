/**
 * Rejection email for a declined account application.
 * @param {string} name
 */
const RejectedMail = (name) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Application Update</title></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:32px">
    <h2 style="color:#333">Account Application Update</h2>
    <p style="color:#555">Hi ${name},</p>
    <p style="color:#555">
      We regret to inform you that your account application could not be approved at this time.
      Please contact your administrator for further information.
    </p>
  </div>
</body>
</html>
`;

module.exports = RejectedMail;
