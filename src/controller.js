window.upDisplay="MOBILE SUIT NEO OPERATION SYSTEM";
gundamOrb={
    nation:"./assets/Nation/orb_union.webp",
    gundam:[
        {letter:"G",acro:"ENERAL"},
        {letter:"U",acro:"NILATERAL"},
        {letter:"N",acro:"EURO-LINK"},
        {letter:"D",acro:"ISPERSIVE"},
        {letter:"A",acro:"UTONOMIC"},
        {letter:"M",acro:"ANEUVER"}
    ]
};
gundamZaftV={
nation:"src/assets/Nation/ZAFT_logo_HD.webp",
    gundam:[
        {letter:"G",acro:"eneral"},
        {letter:"U",acro:"nilateral"},
        {letter:"N",acro:"euro-Link"},
        {letter:"D",acro:"ispersive"},
        {letter:"A",acro:"utonomic"},
        {letter:"M",acro:"aneuver"}
    ]
};

function load(){
    const os=gundamOrb;
    const img=document.getElementById("NationImg");
    const gunddiv=document.getElementById("GundamDiv");
    img.setAttribute("src",os.nation);
    img.setAttribute("alt","Nation");
    const gundam=os.gundam; 
    nationStart.then(
        function() {
                const upHeading=document.getElementById("MobileSuitHead");
                osComplex(upHeading).then(
                    function(){
                        gundamAcrProm(gundam[0]).then(
                            function(){
                                gundamAcrProm(gundam[1]).then(
                                    function(){
                                        gundamAcrProm(gundam[2]).then(
                                            function(){
                                                gundamAcrProm(gundam[3]).then(
                                                    function(){
                                                        gundamAcrProm(gundam[4]).then(
                                                            function(){
                                                                gundamAcrProm(gundam[5]).then(
                                                                    function(){
                                                                        gundAcrClearProm(gundam).then(
                                                                            function(){
                                                                                const gundComp=document.createElement("h1");
                                                                                const complexComp=document.createElement("h3");
                                                                                gundComp.innerHTML="G.U.N.D.A.M";
                                                                                gundComp.setAttribute('class','gundam');
                                                                                complexComp.innerHTML="COMPLEX";
                                                                                complexComp.setAttribute("class","complex");
                                                                                gunddiv.appendChild(gundComp);
                                                                                gunddiv.appendChild(complexComp);
                                                                            }
                                                                        )
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    }
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
                
        }
      );
    
}
function drawSentence(value,comp){
    comp.innerHTML=comp.innerHTML+" "+value;
}
const osComplex=(upHeading)=>new Promise((resolve)=>{
    const upArr=window.upDisplay.split(" ");
    for(var i=0; i<upArr.length; i++){
        setTimeout(drawSentence(upArr[i],upHeading),550);
    }
    resolve();
});
const gundamAcrProm=(acro,time=500)=>new Promise((resolve)=>{
    setTimeout(()=>{
        const gunddiv=document.getElementById("GundamDiv");
        const letter=document.createElement("h1");
        letter.setAttribute("id",acro.letter);
        //letter.setAttribute("class","typed");
        const backSum=11-acro.acro.length;
        for(var i=1; i<backSum; i++){
            acro.acro=acro.acro+" / ";
        }
        const text=acro.letter+"  "+acro.acro+" |";
        letter.innerText=text;
        console.log(letter.innerText);
        gunddiv.appendChild(letter);
        resolve();
    },time);
});
const gundAcrClearProm=(gundam)=>new Promise((resolve)=>{
    setTimeout(() => {
        for(var i=0; i<gundam.length; i++){
            const gunddiv=document.getElementById("GundamDiv");
            gunddiv.removeChild(document.getElementById(gundam[i].letter));
        } 
        resolve();
    }, 1100);
});

const nationStart = new Promise((resolve) => {
    setTimeout(() => {
    const img=document.getElementById("NationImg");  
      img.toggleAttribute('hidden');
      resolve();
    }, 1000);
  });
