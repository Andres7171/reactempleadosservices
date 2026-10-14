import axios from "axios"
import Global from "../Global"

export default class ServiceEmpleados{
    getOficios(){
        return new Promise((resolve)=>{
            let url=Global.urlEmpleados
            let request='api/Empleados/oficios'
            axios.get(url+request).then((response)=>{
                resolve(response.data)
            })
        })
    }

    getEmpleados(){
        return new Promise((resolve)=>{
            let url=Global.urlEmpleados
            let request='api/empleados'
            axios.get(url+request).then((response)=>{
                resolve(response.data)
            })
        })
    }

    getEmpeladosOfico(oficio){
        return new Promise((resolve)=>{
            let url=Global.urlEmpleados
            let request = 'api/empleados/empleadosoficio/'+oficio
            axios.get(url+request).then((response)=>{
                resolve(response.data)
            })
        })
    }
}