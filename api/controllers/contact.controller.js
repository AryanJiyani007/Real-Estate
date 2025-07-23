import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aryanjiyani11@gmail.com",
      pass: "YOUR_APP_PASSWORD", // Replace with your Gmail App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "aryanjiyani11@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email." });
  }
}; 