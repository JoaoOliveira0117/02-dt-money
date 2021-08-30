import { Container } from "./style";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Super Mercado</td>
                        <td className="withdraw">- R$80</td>
                        <td>Mercado</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Posto de Gasolina</td>
                        <td className="withdraw">- R$50</td>
                        <td>Viagem</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}