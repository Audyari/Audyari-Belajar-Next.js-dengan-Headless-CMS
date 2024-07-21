export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Belajar NextJs</title>
      </head>
      <header>[header]</header>
      <main>{children}</main>
      <footer>[footer]</footer>
    </html>
  );
}
