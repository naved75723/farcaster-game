export default function handler(req, res) {
  const score = Number(req.query.score || 0) + 1;

  let image = "https://i.imgur.com/9YQZQZx.png";
  let text = "Click 🔥";

  if (score >= 5) {
    image = "https://i.imgur.com/8Qf0ZQk.png";
    text = "You Win 🎉";
  }

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${image}" />
        <meta property="fc:frame:button:1" content="${text}" />
        <meta property="fc:frame:post_url" content="/api?score=${score}" />
      </head>
    </html>
  `);
}
