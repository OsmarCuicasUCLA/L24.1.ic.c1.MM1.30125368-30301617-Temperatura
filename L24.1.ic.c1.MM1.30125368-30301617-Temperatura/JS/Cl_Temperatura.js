export default class Cl_Temperatura{
    constructor(temperaturaInicial, unidadOrigen){
        this.temperaturaInicial = temperaturaInicial;
        this.unidadOrigen =  unidadOrigen
    }

    get temperaturaInicial(){
        return this._temperaturaInicial;
    }

    set temperaturaInicial(e) {
        this._temperaturaInicial = +e;
    }

    get unidadOrigen() {
        return this._unidadOrigen;
    }

    set unidadOrigen(e) {
        this._unidadOrigen = +e;
    }

    Calc_NuevaTemperatura(){
        if(this.unidadOrigen == 1){
            return ((this.temperaturaInicial * (9/5)) + 32)
        }else{
            return ((this.temperaturaInicial - 32) * (5/9))
        }
    }
}