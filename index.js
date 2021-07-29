async function getData() {
    var b = [];
    let res = await fetch(
        "https://covid-api.mmediagroup.fr/v1/cases?country=India"
    );
    let data = await res.json();
  
//changing object to array
    let arr = Object.entries(data) 
    console.log(arr);
    foo(arr);
}

getData();

function foo(arr) {
    let overall = arr[0]
    console.log(overall[1].confirmed);
    var all = document.getElementById('all')
    all.innerHTML = `Total Cases in India: ${overall[1].confirmed}
    <p>Total Death: ${overall[1].deaths}</p>
                    <p>Total Recovered: ${overall[1].recovered}</p>
                    `
    for (let i = 1; i <= arr.length; i++) {
        var body = document.getElementById('state')
        let a = arr[i]
        // let b = a[1]
        // console.log(a);
        // a[0] + " "  + "\n"+'confirmed: '+ a[1].confirmed 
        body.innerHTML += ` <div class="col-sm-3">
        <div class="box-part text-left">
            <div class="title">
                <h4>${a[0]} </h4>
                <div class="text">
                    <span> Confirmed Cases: ${a[1].confirmed}</span>
                    <p><span>Total Death: </span>${a[1].deaths}</p>
                    <p><span>Total Recovered: </span>${a[1].recovered}</p>
                    <p><span>Last Updated: </span>${a[1].updated}</p>
                </div>

            </div>
            
          </div>
          </div>`
    }

    
}





