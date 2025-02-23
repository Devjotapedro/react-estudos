const Events = () => {

    const handleClick = () => {
        console.log('executou')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>renderizando isso</h1>
        }else{
            <h1>renderizando outra coisa</h1>
        }
    }

    return(
        <>
        <div>
            <button onClick={() => console.log("testndo um evento")}>Clique aqui</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>

        {renderSomething(true)}
        {renderSomething(false)}
        </>
    )
}

export default Events;