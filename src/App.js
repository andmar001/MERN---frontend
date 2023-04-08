import React, {Fragment} from "react";

/*** Layout */
import Header from "./components/layout/Header";
import Navegacion from "./components/layout/Navegacion";

function App(){
  return(
    <Fragment>
      <Header />
      <div className="grid contenedor contenido-principal">
        <Navegacion />
        <main class="caja-contenido col-9">
          {/* TODO: routing a los componentes */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aut optio soluta quos, molestiae voluptas rerum error, fuga tenetur esse consequatur. Sed ad eaque magni similique quo praesentium nesciunt dolorum!
        </main>
      </div>

    </Fragment>
  )
}

export default App;