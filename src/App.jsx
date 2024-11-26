import { Main } from "./Mainf";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function App(){
    return(
        
        <>
            <header><Header/></header>
            <main><Main/></main>
            <footer class="text-muted py-5"><Footer/></footer>
        </>
    )
}