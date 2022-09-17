import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import { useContext, useEffect } from "react";
import type { MetaFunction } from "remix";

import styles from "~/styles/global.css";
// styles is now something like /build/global-AE33KB2.css

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const meta: MetaFunction = () => {
  return {
    title: "California Custom Tile",
    description:
      "Southern California-based tile company serving customers for over 40 years",
  };
};

const Document = ({ children, title }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div style={{ backgroundColor: "#ff0000", padding: "1em" }}>
        <p>
          [CatchBoundary]: {caught.status} {caught.statusText}
        </p>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <div style={{ backgroundColor: "#ff0000", padding: "1em" }}>
        <p>[ErrorBoundary]: There was an error: {error.message}</p>
      </div>
    </Document>
  );
}

// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width,initial-scale=1" />
//         <Meta />
//         <Links />

//         {globalStyles()}
//       </head>
//       <body>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         {process.env.NODE_ENV === "development" && <LiveReload />}
//       </body>
//     </html>
//   );
// }
