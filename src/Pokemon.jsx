/*function Pokemon ({Name, Url}) {
    return (
        <div>
            <div>{Name}</div>
            <a href={Url} alt={Name}>{Url}</a>


        </div>

    )

}*/
function Pokemon ({Data}) {
    return (
        <div>
            <div>{Data.name}</div>
            <a href={Data.url} alt={Data.name}>{Data.url}</a>


        </div>

    )

}

export default Pokemon;