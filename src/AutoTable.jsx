
export default function AutoTable() {
  

const data= [{"date":"01/01/23","id":1,"score":65,
"totFailed":6,"totGreen":4,"averageTime":4.2},
{"date":"01/01/23","id":2,"score":70,
"totFailed":5,"totGreen":5,"averageTime":3.5},
{"date":"01/01/23","id":3,"score":80,
"totFailed":3,"totGreen":7,"averageTime":3.1}]



  return (
    <>
    <div className="container" >
      <div>
      <div className="px-6 py-7 my-7 text-center">
        <h1>Resultados</h1>
        </div>

{/*inicio cards*/}
<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
  <div className="card text-center border-primary">
  <div className="card-header border-primary bg-primary  bg-opacity-25">
    Mejor Puntaje
  </div>
  <div className="card-body border-primary">
    <h5 className="card-title text-primary">Tu mejor puntaje: 90 pts</h5>
    <p className="card-text">Tu Ranking: Puesto 16th en la liga Regional</p>
    <p className="card-text">Mejor puntaje Regional: 98</p>
  </div>
  <div className="card-footer border-primary ">
     logrado el 01/02/23
  </div>
</div>
  </div>
  {/*Card 2*/}
  <div className="col-sm-6">
  <div className="card border-primary text-center">
  <div className="card-header bg-primary  bg-opacity-25 border-primary">
    Mejor Tiempo
  </div>
  <div className="card-body">
    <h5 className="card-title text-primary">Tu mejor tiempo es: 2.98 seg</h5>
    <p className="card-text">Tu Ranking: Puesto 22th en la liga regional</p>
    <p className="card-text">Mejor Tiempo Regional: 2.75 seg</p>
  </div>
  <div className="card-footer border-primary ">
   logrado el 01/03/23
  </div>
</div>
  </div>
</div>

        <p>Aqui tus ultimos entrenamientos</p>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th width="25%" className="table-primary">
                    Tiempo Promedio
                  </th>
                  <th width="20%" className="table-primary">Puntaje</th>
                  <th width="10%" className="table-primary">Fallados</th>
                  <th width="25%" className="table-primary">Aciertos</th>
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
                  <th className="cart-highlight">71</th>
                </tr>
              </tfoot>
            </table>
      </div>
    </div>

    

    </>);
}
