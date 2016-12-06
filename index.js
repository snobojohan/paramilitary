// Main package function
const paramilitary = () => {
    // Returns true if the input is either undefined, null, or empty, false otherwise
    const rhymesWithParamilitary = [
    	"beneficiary",
    	"devolutionary",
    	"eleemosynary",
    	"evidentiary",
    	"evolutionary",
    	"extraliterary",
    	"insurrectionary",
    	"intermediary",
    	"penitentiary",
    	"quatercentenary",
    	"revolutionary",
    	"sesquicentenary",
    	"supernumerary",
    	"valetudinary"
    ]
    return rhymesWithParamilitary[Math.floor(Math.random()*rhymesWithParamilitary.length)];
}

module.exports = paramilitary;
