var SpeechRecognition= window.webkitSpeechRecognition;
var rec= new SpeechRecognition();
function start(){
    document.getElementById("text_box").innerHTML="";
    rec.start();
}
rec.onresult=function run(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie...");
        speak();
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data= "Taking selfie in the square root of 144 - 7 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(Camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}
Webcam.set({
    width:330,
    height:300,
    image_format:'png',
    png_quality:90
});
Camera=document.getElementById("cam");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='img_cool'src="+ data_uri + ">";

    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("img_cool").src;
    link.href=img;
    link.click();

}


