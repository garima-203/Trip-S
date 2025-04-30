import NavLayout from "./layout/navLayout";
 
export default function RootLayout({ children }) {
    return (
      <> 
        <head>
          <title>Hotel Page</title>
        </head>
        <NavLayout>
        {children}
        </NavLayout>
      </>
    );
  }
  