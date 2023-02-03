export const Dashboard = () => {
    return (
        <nav className="navbar text-center sticky-top grid gap-3" style={{"backgroundColor": "rgb(26, 49, 109)"}}>
            <img src={window.location.origin + '/imgs/logo_mgm.png'} style={{"width":"70px", "margin":"0 30px"}}/>
            <div class="input-group d-flex align-items-center" style={{"width":"600px"}}>
                <i className="fa-solid fa-magnifying-glass text-white m-3 fs-5"></i>
                <input type="text" className="form-control" placeholder="Clientes" aria-label="Username" style={{"borderRadius":"5px"}} />
            </div>
            <div class="input-group d-flex align-items-center" style={{"width":"300px"}}>
                <i className="fa-solid fa-magnifying-glass text-white m-3 fs-5"></i>
                <input type="text" className="form-control" placeholder="Contratos" aria-label="Server" style={{"borderRadius":"5px"}} />
            </div>
            <div class="dropdown d-flex align-items-center" style={{"margin":"0 50px"}}>
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{"width":"300px"}}>
                    Seleccione Comercial
                </button>
                <ul class="dropdown-menu" style={{"width":"300px"}}>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </nav>
    )
}
