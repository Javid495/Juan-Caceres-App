export class NavBarMenu extends HTMLElement {
    constructor(){
        super()
        this.render()
    }
    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg" id="Barra">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="images/pngwing.com.png" alt="" width="50px" height="50px"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="color:white;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="ingresarRecluta.html">Ingresar Recluta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="verReclutas.html" >Ver Reclutas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `
    }
}

customElements.define("nav-bar-menu", NavBarMenu);