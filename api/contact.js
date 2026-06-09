const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nome, azienda, email, tel, settore, msg } = req.body || {};

  if (!nome || !email || !msg) {
    return res.status(400).json({ error: "Campi obbligatori mancanti" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
<h2>Nuova richiesta dal sito Mec Tech</h2>
<table style="border-collapse:collapse">
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Nome</td><td>${nome}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Azienda</td><td>${azienda || "—"}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Email</td><td>${email}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Telefono</td><td>${tel || "—"}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Settore</td><td>${settore || "—"}</td></tr>
</table>
<h3>Messaggio</h3>
<p>${msg.replace(/\n/g, "<br>")}</p>
`;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Richiesta preventivo — ${nome}`,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return res.status(500).json({ error: "Invio email fallito" });
  }
};
