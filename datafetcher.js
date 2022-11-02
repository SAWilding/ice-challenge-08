async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data
    } else {
      throw { name: 'servicesError', message: data };
    }
  }
export default class datafetcher {

    constructor() {
        this.init()

    }

    async init() {
        const departments = await this.getInfo("https://collectionapi.metmuseum.org/public/collection/v1/departments");
        this.displaydepartments(departments);
    }

    async getInfo(url) {
        // Get the response from the url and return the json response

        return await fetch(url).then(convertToJson);
        

    }


    displaydepartments(list) {
        const departments = list.departments;
        console.log(departments);
        departments.forEach((department) => {
            const departmentElement = document.querySelector("#department-select");

            const selectElement = document.createElement("option");
            selectElement.setAttribute("value", department.departmentId);
            selectElement.textContent = department.displayName;

            departmentElement.appendChild(selectElement);
        })
    }
    
    async displayResults(url) {
        const data = await this.getInfo(url);
        const objectIds = data.objectIDs;
        const resultsElement = document.querySelector("#results");
        resultsElement.innerHTML = "";
        for (let i = 0; i < 10; ) {
            
            const record = await this.getRecord(objectIds[i]);
            if (record.primaryImageSmall != "") {
                console.log(record);
                const img = document.createElement("img");
                img.setAttribute("src", record.primaryImageSmall)
                resultsElement.appendChild(img);
                i++;
            }
        }
        
    }

    async getRecord(id) {
        return await this.getInfo(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
    }


}