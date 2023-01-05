
export default function AutoTable() {
  

const data= [{"date":"01/01/23","id":1,"score":100,
"totFailed":1,"totGreen":9,"averageTime":14.5},
{"date":"01/01/23","id":2,"score":100,
"totFailed":1,"totGreen":9,"averageTime":14.5},
{"date":"01/01/23","id":3,"score":100,
"totFailed":1,"totGreen":9,"averageTime":14.5}]



  return (
    <>
    <div className="container" >
      <div>
        <h1>Resultados</h1>
        
            <table className="table table-striped">
              <thead>
                <tr>
                  <th width="25%" className="table-primary">
                    Tiempo Promedio
                  </th>
                  <th width="20%" className="table-primary">puntaje</th>
                  <th width="10%" className="table-primary">Tot Failed</th>
                  <th width="25%" className="table-primary">Tot Hit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((session) => {
                  return (
                    <tr key={session.id}>
                      
                      <td>{session.averageTime}</td>
                      <td>{session.score}</td>
                      <td>
                        <strong>{session.totFailed}</strong>
                      </td>
                      <td>
                        <strong>{session.totGreen}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Promedio</th>
                  <th className="cart-highlight">100</th>
                </tr>
              </tfoot>
            </table>
          
        
      </div>
    </div>
    </>);
}
