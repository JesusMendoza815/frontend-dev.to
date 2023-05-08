import { BASE_URL } from "../constants/urls.js"

let formButton = document.getElementById('form__button')
let fields = document.querySelectorAll("form .form-control")
let profileName = document.getElementById("profile_name")
let bioDom = document.getElementById("profile_bio")
let nameToEdit = document.getElementById("profile_name-edit")
let bioToEdit = document.getElementById("profile_bio-edit")
let newData = {}

const token = localStorage.getItem("token")

const tokenSession = () => {
    token ? null : window.open('../index.html', '_self')
}
tokenSession()

const getTokenPayload = (token) => {
    const splited = token.split(".")
    const payload = atob(splited[1])
    const payloadParsed = JSON.parse(payload)
    return payloadParsed
}

const populateData = async () => {
    try {
        const userData = getTokenPayload(token)
        let response = await fetch(
            `${BASE_URL}/users/${userData._id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        let responseJson = await response.json()
        let { name, bio } = responseJson.data
        localStorage.setItem("data", JSON.stringify(responseJson.data))

        profileName != null ? profileName.textContent = name : null ; 
        bioDom != null ? bioDom.textContent = bio : null; 

        nameToEdit != null ? nameToEdit.value = name : null;
        bioToEdit != null ? bioToEdit.value = bio : null;
        
        return responseJson
    } catch (error) {
        console.log(error);
        // alert('Opss! someting went wrong')
    }
}
populateData()

fields.forEach(field => {
    field.addEventListener("change", (event) => {
        let property = event.target.name
        let value = event.target.value
        newData[property] = value
    })
})



const newDataPatch = async (newData) => {
    try {
        const userData = getTokenPayload(token)
        let response = await fetch(
            `${BASE_URL}/users/${userData._id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        let data = await response.json()
        return data
    } catch (error) {
        alert('Opsss something went wrong')
    }
}


formButton != null 
? formButton.addEventListener("click", () => {
    newDataPatch(newData)
    window.open('../index.html', '_self')
})
: null;

/////////////

let logOutButton = document.getElementById('sign_out')


logOutButton.addEventListener('click', () => {
    localStorage.removeItem('token')
    window.open('../index.html', '_self')
})