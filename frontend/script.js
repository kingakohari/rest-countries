
const loadEvent = async _ => {



    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend",`
    
    <form>	  
        <input id="input1" placeholder="Enter some text" name="input1"/></input>
        <input id="input2" placeholder="Enter some text" name="input2"/></input>
        <input id="input3" placeholder="Enter some text" name="input3"/></input>
        <select name="animals" id="animals">
            <option value="both2">Both</option>
            <option value="cats9">Cats</option>
            <option value="dogs1">Dogs</option>
        </select>
        <button>Submit</button>  
    </form>
    `)    

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll("input")

    console.log(Array.isArray(inputList))
    console.log(typeof inputList);

    Array.from(inputList).map(function(input) {
        input.addEventListener("input", function(event) {
            console.log(event.target.value);
        })
    })

    form.querySelector("select").addEventListener("input", function(event){
        console.log(event.target.value);
    })

    form.addEventListener("submit",function(event) {
        event.preventDefault()
        console.log(event.target);
    })

/*  for (const input of inputList) {
        input.addEventListener("input", function(event) {
            console.log(event.target.value);
        })
    } */

    const apiKey = "bT4tpRHIuLBqvqfsmafjX2qeyIaykEQUv26jx1wg"

    const requestedDate = "2022-03-01"

/*  Await-tel:

    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`)

        console.log(apod); 

    const apodJson = await apod.json() 

    console.log(apodJson.explanation); */

// Then-nel:

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${requestedDate}`).then(
        function (apodResponse){
            console.log(apodResponse);
            apodResponse.json().then(
                function (apodResponseJson) {
                    console.log(apodResponseJson.explanation);
                }
            )
        }
    )
} 

window.addEventListener("load", loadEvent) 
