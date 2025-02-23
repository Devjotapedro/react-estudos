const TemplateExpression =  () => {
    const nome = 'JP'

    const data = {
        age: 25,
        job: 'programdor'
    }
    return (

        <>
            <div>templte expression</div>
            <p>A soma é {2+2}</p>
            <h3>Bem-vindo, { nome }</h3>
            <p>Sua idade é {data.age} anos e você é um {data.job}</p>
        </>
    );
}

export default TemplateExpression;