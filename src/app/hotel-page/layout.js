import NavLayout from './layout/navLayout'
export const metadata = {
  title: "Hotel Page",
  description: "Desciption",
};
export default function RootLayout ({ children }) {
  return (
    <>  
          <NavLayout>{children}</NavLayout>
       
    </>
  )
}
