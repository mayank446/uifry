function Card(props: any) {
    return (
        <div className="w-full p-4"> 
            <h3 className="text-3xl font-semibold">{props.query}</h3>
            <p className="font-medium ">{props.ans}</p>
        </div>
    )
}


export default Card