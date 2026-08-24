import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(process.env.URL??"https://rocio-dopazo.netlify.app"),title:"Rocío Dopazo — Systems & Change Architect",description:"Arquitectura de sistemas complejos, transformación organizacional, tecnología e IA. MPA Flow.",openGraph:{title:"Rocío Dopazo — Systems & Change Architect",description:"Making complexity visible. Designing transformation.",type:"website",images:[{url:"/og.png",width:1584,height:396,alt:"Rocío Dopazo — Systems, Transformation, Technology & AI"}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
