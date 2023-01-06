import Link from "next/link";


const NotFound = () => {
    return ( 
        <div className="not-foud">
                <h1>Oooops...</h1>
                <h2>La página que busca no fue encontrada</h2>
                <p>Volver al <Link> <a href="/">inicio</a></Link></p>
        </div>
     );
}
 
export default NotFound;