function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    clasificador=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EubupUNJk/model.json",modelready);

} 
function modelready(){
    clasificador.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
        
    }
    else{
        console.log(results);
        document.getElementById("result").innerHTML="Escucho: "+results[0].label;
        document.getElementById("precision_resultado").innerHTML="Precision: "+(results[0].confidence*100).toFixed(2)+"%";
        imagen1=document.getElementById("alien1");
        imagen2=document.getElementById("alien2");
        imagen3=document.getElementById("alien3");
        imagen4=document.getElementById("alien4");
        if(results[0].label=="Ruido de fondo"){
            imagen1.src="aliens-01.gif";
            imagen2.src="aliens-02.png";
            imagen3.src="aliens-03.png";
            imagen4.src="aliens-04.png";
        }
        else if(results[0].label=="campanita"){
            imagen1.src="aliens-01.png";
            imagen2.src="aliens-02.gif";
            imagen3.src="aliens-03.png";
            imagen4.src="aliens-04.png";
        }
        else if(results[0].label=="ruido_con_manos"){
            imagen1.src="aliens-01.png";
            imagen2.src="aliens-02.png";
            imagen3.src="aliens-03.gif";
            imagen4.src="aliens-04.png";
        }
        else{
            imagen1.src="aliens-01.png";
            imagen2.src="aliens-02.png";
            imagen3.src="aliens-03.png";
            imagen4.src="aliens-04.gif";
        }
    }

}
