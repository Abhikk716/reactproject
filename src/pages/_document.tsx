import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", () => {
                  const tabButtons = document.querySelectorAll(".tab-btn");
                  const tabContents = document.querySelectorAll(".tab-content");

                  tabButtons.forEach(button => {
                      button.addEventListener("click", () => {
                          tabButtons.forEach(btn => btn.classList.remove("active"));
                          tabContents.forEach(content => content.classList.remove("active"));

                          button.classList.add("active");
                          const tabId = button.getAttribute("data-tab");
                          document.getElementById(tabId).classList.add("active");
                      });
                  });
              });
            `,
          }}
        ></script>
         <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
