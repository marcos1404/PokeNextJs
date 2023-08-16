import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

interface Props {
    children : React.ReactNode
}


export default function Layout({children}:Props){
    return (
        <>
            <Head>
                <link rel="shotcut icon" href="/images/favicon.ico"/>
                <title>PokeNext</title>
            </Head>
            <Navbar/>
            <main className="main-container">{children}</main>
            <Footer/>
        </>
    )
}