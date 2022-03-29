import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner({children}) {
    const title = "La maison jungle";
    return (
        <div className="lmj-banner">
            <div> {children} </div>
            <img src={ logo } alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{ title }</h1>
            
        </div>

    );
}

export default Banner