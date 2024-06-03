import ellipse from '../assets/Ellipses.png'

function Ellipses() {
    return (
        <div className="bg-red-100 flex relative">
            <img className='absolute mt-2 ml-14' src={ellipse} />
            <img className='absolute mt-8 ml-8' src={ellipse} />
            <img className='absolute mt-14 ml-2' src={ellipse} />
        </div>
    )
}

export default Ellipses