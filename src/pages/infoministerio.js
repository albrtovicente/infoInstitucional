import * as React from "react"
import './infoinstitucional.css';
import { StaticImage } from "gatsby-plugin-image"



const InfoMinisterio = () => {
  
    return (
      <>
        <div className="flexintitucional">
          
          <div className="indiceInstitucional">
          
          <br/>
             <a href="/" role='button' className="aInst">Bienvenida de la presidenta</a> <br/><br/>
             <a href="/infohistoria" role='button' className="aInst">Conoce nuestra historia</a> <br/><br/>
             <a href="/infoadministrador" role='button' className="aInst">Consejo de administrador</a> <br/><br/>
             <a href="/infooficiales" role='button' className="aInst">Actos oficiales e institucionales</a> <br/><br/>
             <a href="/infocasaRey" role='button' className="aInst">Casa de S.M. el rey</a> <br/><br/>
             <a href="/inforetratosOficiales" role='button' className="aInst">Retratos oficiales</a> <br/><br/><br/>

          </div>

          <div className="Iinstitucional">
            <h1 style={{textAlign: `center`}}>Ministerio de la presidencia</h1>  
            <br></br>
            <p>
               <div className="imgInst">
                <StaticImage 
                  style={{width: `1300px`,height: `200px`, textAlign: `center`}}
                  src="../images/ministerio.jpg"
                />
              </div>
            </p>
            
          </div>
        </div>
        
        
  
         
  
      </>
      
    )
  }
  
  export default InfoMinisterio