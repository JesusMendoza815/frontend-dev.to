import { getElement } from "./createPostModule.js";
import { createCardPostHome } from "./createCards.js";
import {isLogged} from "./isLogged.js"



//Filtar por barra de navegación 
let wordslower = []
let btn = document.getElementById("posts-home")

const values = async ()=>{
    let get = await getElement()
    document.querySelectorAll('#posts-home .card').forEach(card => card.remove())
    for( let key in get){
        let {date,image,content,title, user} = get[key]
        btn.appendChild(createCardPostHome(image,title, user,content,date,key,isLogged))
        
        wordslower.push(title.toLowerCase())//almace
    }
    document.getElementById('relevant').addEventListener('click', values)
}

const filterforLupita = async ()=>{
    let get = await getElement()
    document.getElementById("search").addEventListener("keyup",(array)=>{
        document.querySelectorAll('#posts-home .card').forEach(card => card.remove())
       let  string = array.target.value
        for(let key in get){
            let lowerTitle =get[key].title.toLowerCase()
            if(lowerTitle.includes(string.toLowerCase()) != false){
                let {date,image,content,title, user} = get[key]
                btn.appendChild(createCardPostHome(image,title, user,content,date,key,isLogged))
            }
        }
    })
}
//Filtrado por Post mas reciente 

const sortByDate = async ()=>{
    let response = await getElement()
    
    let result = Object.keys(response).sort((a,b) => moment(response[b].date).valueOf() - moment(response[a].date).valueOf()) 
    let completeResult = result.reduce( (accum, current) => ({...accum, [current]:response[current]}),{})
    document.getElementById("order-Post").addEventListener("click",()=>{
        document.querySelectorAll('#posts-home .card').forEach(card => card.remove())
        for (let key in completeResult ){
            let {date,image,content,title, user} = completeResult[key]
            btn.appendChild(createCardPostHome(image,title, user,content,date,key,isLogged))
        }
    }) 
}

export{filterforLupita, values,sortByDate}



