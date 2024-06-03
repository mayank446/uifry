import red from '../assets/red.png'
import yellow from '../assets/yellow.png'

function Colors() {
    return (
        <div className="w-80 h-56 relative">
            <img className='absolute top-4 z-10' src={red} />
            <img className='absolute top-20' src={yellow} />
        </div>
    )
}

export default Colors