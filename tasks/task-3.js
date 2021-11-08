const textArray = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"],
  ["He", "loves", "tacos"],
]

const format = ["LEFT", "RIGHT", "LEFT", "RIGHT"];

const limit = 16;


function formatText (data, format, limit){
  let rezult = [
    "******************",
  ];
  let message ='';  
  
format.map((side, index)=>{  
  if(data[index].join(" ").length > limit){
       let firstPart = data[index].splice(0, 3).join(" ");  
       let secondPart = data[index].join(" "); 
  
        if(side === "LEFT"){
         rezult.push(`*${firstPart.padEnd(16, " ")}*`);
         rezult.push(`*${secondPart.padEnd(16, " ")}*`)
       }else{
         rezult.push(`*${firstPart.padStart(16, " ")}*`);
         rezult.push(`*${secondPart.padStart(16, " ")}*`)
       }
  } else {
    if(side === "LEFT"){  
        message = `*${data[index].join(' ').padEnd(16, " ")}*`;
        rezult.push(message);
      } else {
          const message = `*${data[index].join(' ').padStart(16, " ")}*`;   
          rezult.push(message);
        }
    
  }
});
  rezult.push("******************");
  console.log(rezult);  
}

formatText(textArray, format, limit);


     
