/*
console.log('Data 1')
console.log(' ')

const markWeightData1 = 78 
const markHeightData1 = 1.69
const johnWeightData1 = 92
const johnHeightData1 = 1.95

const markBMIData1 = markWeightData1/markHeightData1**2
console.log("Mark's BMI " + markBMIData1)
const johnBMIData1 = johnWeightData1/(johnHeightData1*johnHeightData1)
console.log("John's BMI " + johnBMIData1)

const markHigherBMIData1 = markBMIData1>johnBMIData1

console.log("Is Mark's BMI higher than John's BMI?"+' ' + "R:" + markHigherBMIData1)
console.log(`
Final result:`)
if(markBMIData1>johnBMIData1){console.log(`Mark's BMI (${markBMIData1}) is higher than John's!`)}else{console.log(`John's BMI (${johnBMIData1}) is higher than Mark's!`)}
//challenge #2

console.log(' ')
console.log('Data 2')
console.log(' ')

const markWeightData2 = 95 
const markHeightData2 = 1.88
const johnWeightData2 = 85
const johnHeightData2 = 1.76

const markBMIData2 = markWeightData2/markHeightData2**2
console.log("Mark's BMI " + markBMIData2)

const johnBMIData2 = johnWeightData2/(johnHeightData2*johnHeightData2)
console.log("John's BMI " + johnBMIData2)

const markHigherBMIData2 = markBMIData2>johnBMIData2
console.log("Is Mark's BMI higher than John's BMI?"+' ' + "R:" + markHigherBMIData2)
console.log(`
Final result:`)
if(markBMIData2>johnBMIData2){console.log(`Mark's BMI (${markBMIData2}) is higher than John's!`)}else{console.log(`John's BMI (${johnBMIData2}) is higher than Mark's!`)}
//Challenge #2
*/
/*
const dolphinsAvg = (96+108+89)/3
const koalasAvg = (88+91+110)/3

if(dolphinsAvg>koalasAvg) {console.log(`Dolphins won!`)} 
else if(koalasAvg>dolphinsAvg){console.log(`Koalas won!`)} 
else if(koalasAvg===dolphinsAvg) {`Both won!`}
*/
/*
console.log(`Bonus 1`)

const dolphinsAvgBonus1 = (97+112+101)/3
const koalasAvgBonus1 = (109+95+123)/3

console.log(dolphinsAvgBonus1, koalasAvgBonus1)

if(dolphinsAvgBonus1>koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {console.log(`Dolphins won!`)} 
else if(koalasAvgBonus1>dolphinsAvgBonus1 && koalasAvgBonus1 >= 100 ){console.log(`Koalas won!`)} 
else if(koalasAvgBonus1 === dolphinsAvgBonus1 && (koalasAvgBonus1 >= 100 || dolphinsAvgBonus1 >= 100)) {`Both won!`}

console.log(`Bonus 2`)

const dolphinsAvgBonus2 = (97+112+101)/3
const koalasAvgBonus2 = (109+95+106)/3

console.log(dolphinsAvgBonus2, koalasAvgBonus2)

if(dolphinsAvgBonus2>koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {console.log(`Dolphins won!`)} 
else if(koalasAvgBonus2>dolphinsAvgBonus2 && koalasAvgBonus2 >= 100 ){console.log(`Koalas won!`)} 
else if(koalasAvgBonus2 === dolphinsAvgBonus2) {console.log(`Both won!`)} 
else if ( (koalasAvgBonus2 >= 100 || dolphinsAvgBonus2 >= 100)){console.log`There's no winner :(`}


console.log(`Bonus 3`)

const dolphinsAvgBonus3 = (97+112+70)/3
const koalasAvgBonus3 = (109+95+80)/3

console.log(dolphinsAvgBonus3, koalasAvgBonus3)

if(dolphinsAvgBonus3>koalasAvgBonus3 && dolphinsAvgBonus3 >= 100) {console.log(`Dolphins won!`)} 
else if(koalasAvgBonus3>dolphinsAvgBonus3 && koalasAvgBonus3 >= 100 ){console.log(`Koalas won!`)} 
else if(koalasAvgBonus3 === dolphinsAvgBonus3 && (koalasAvgBonus3 >= 100 || dolphinsAvgBonus3 >= 100)) {console.log(`Both won!`)} 
else {console.log(`There's no winner :(`)}
*/

const billValue =275
const tip = billValue >= 50 && billValue <= 300 ? billValue*0.15 : billValue*0.20
console.log(`The bill was ${billValue}, the tip was $${tip}, and the total value ${billValue + tip}`)
