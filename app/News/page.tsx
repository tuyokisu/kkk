import Footer from "../components/Footer"
import Header from "../components/Header"
import NewsList from "../components/NewsList"

export default function NewsPage(){
  return(
    <main className="min-h-screen">
    <Header />
    <NewsList />
    <Footer />
    </main>
  )
}

