

import "./globals.css";

//Redux Provider
import ReduxProvider from "@/provider/redux/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          </ReduxProvider>
      </body>
    </html>
  );
}