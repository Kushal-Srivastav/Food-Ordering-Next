import Link from "next/link"
import Header from './components/header'
export default function Home() {
    return ( 
        <main>
           <Header/>
            <h1>Welcome to the course</h1>
            <p> Let us get started</p>
            <p><Link href="/about">About Us</Link></p>
        </main>
    )
}

