import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Naruto memory game",
  description: "Generated by create next app (Mobina Yousefian)",
};

export default function RootLayout({ children }) {
    const DynamicModals = dynamic(() => import('../components/Modals'), {
        ssr : false,
    })

  return (
    <ReduxProvider>
        <html lang="en">
        <body className={"backdrop-blur-sm bg-cover bg-no-repeat bg-[url('/icons/background.jpg')] h-[100vh]"}>
        {children}
        <DynamicModals/>
        </body>
        </html>
    </ReduxProvider>
  );
}
