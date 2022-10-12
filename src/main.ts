import "./style.css";
interface IQueuable {
    enqueue(value: string) : string[];

    dequeue(): string;

    getQueue(): string[];

    size(): number;
}

class FIFOQUEUE implements IQueuable{

    queue: string[] = [];

    enqueue(value: string):string[]{
        this.queue.push(value);
        return this.queue;
    }

    dequeue():string{
        var element = this.queue.shift()!;
        return element;
    }

    getQueue(){
        return this.queue;
    }

    size():number{
        return this.queue.length;
    }
}

class LIFOQUEUE implements IQueuable{

    queue: string[] = [];

    enqueue(value: string):string[]{
        this.queue.push(value);
        return this.queue;
    }

    dequeue():string{
        var element = this.queue.pop()!;
        return element;
    }

    getQueue(){
        return this.queue;
    }

    size():number{
        return this.queue.length;
    }
}

var queue = new FIFOQUEUE();
var code = "TQS";
var count= 0;

document.getElementById("generateNumber")!.onclick = function() {generateTicket()};

document.getElementById("c1_off")!.onclick = function() {c1GoOff()};
document.getElementById("c2_off")!.onclick = function() {c2GoOff()};
document.getElementById("c3_off")!.onclick = function() {c3GoOff()};
document.getElementById("c4_off")!.onclick = function() {c4GoOff()};

document.getElementById("c1_comp")!.onclick = function() {c1CompCurr()};
document.getElementById("c2_comp")!.onclick = function() {c2CompCurr()};
document.getElementById("c3_comp")!.onclick = function() {c3CompCurr()};
document.getElementById("c4_comp")!.onclick = function() {c4CompCurr()};

document.getElementById("c1_call")!.onclick = function() {c1Call()};
document.getElementById("c2_call")!.onclick = function() {c2Call()};
document.getElementById("c3_call")!.onclick = function() {c3Call()};
document.getElementById("c4_call")!.onclick = function() {c4Call()};


const latestNumber  = document.getElementById("latest_issued_num")!;
const CurrentNumber = document.getElementById("latest_serving_num")!;

const counter1 = document.getElementById("counter1")!;
const counter2 = document.getElementById("counter2")!;
const counter3 = document.getElementById("counter3")!;
const counter4 = document.getElementById("counter4")!;

const c1_indicator = document.getElementById("c1_indicator")!;
const c2_indicator = document.getElementById("c2_indicator")!;
const c3_indicator = document.getElementById("c3_indicator")!;
const c4_indicator = document.getElementById("c4_indicator")!;

const c1_curr_num = document.getElementById("c1_curr_num")!;
const c2_curr_num = document.getElementById("c2_curr_num")!;
const c3_curr_num = document.getElementById("c3_curr_num")!;
const c4_curr_num = document.getElementById("c4_curr_num")!;






function ticketGenerator():string{
    count=count+1;
    return code + count;
}

function generateTicket(){
    queue.enqueue(ticketGenerator());
    var q = queue.getQueue();
    latestNumber.innerHTML = q[queue.size()-1];


}


function c1GoOff(){
    var buttonText=document.getElementById("c1_off")!.innerText;
    if (buttonText=="Go Offline"){
        counter1.style.opacity="0.5";
        c1_curr_num.innerHTML = "Offline";
        c1_indicator.style.background="grey";
        document.getElementById("c1_off")!.innerHTML="Go Online";
    }
    else{
        counter1.style.opacity="1";
        c1_curr_num.innerHTML = "Available";
        c1_indicator.style.background="green";
        document.getElementById("c1_off")!.innerHTML="Go Offline";
    }
}

function c2GoOff(){
    var buttonText=document.getElementById("c2_off")!.innerText;
    if (buttonText=="Go Offline"){
        counter2.style.opacity="0.5";
        c2_curr_num.innerHTML = "Offline";
        c2_indicator.style.background="grey";
        document.getElementById("c2_off")!.innerHTML="Go Online";
    }
    else{
        counter2.style.opacity="1";
        c2_curr_num.innerHTML = "Available";
        c2_indicator.style.background="green";
        document.getElementById("c2_off")!.innerHTML="Go Offline";
    }
}

function c3GoOff(){
    var buttonText=document.getElementById("c3_off")!.innerText;
    if (buttonText=="Go Offline"){
        counter3.style.opacity="0.5";
        c3_curr_num.innerHTML = "Offline";
        c3_indicator.style.background="grey";
        document.getElementById("c3_off")!.innerHTML="Go Online";
    }
    else{
        counter3.style.opacity="1";
        c3_curr_num.innerHTML = "Available";
        c3_indicator.style.background="green";
        document.getElementById("c3_off")!.innerHTML="Go Offline";
    }
}

function c4GoOff(){
    var buttonText=document.getElementById("c4_off")!.innerText;
    if (buttonText=="Go Offline"){
        counter4.style.opacity="0.5";
        c4_curr_num.innerHTML = "Offline";
        c4_indicator.style.background="grey";
        document.getElementById("c4_off")!.innerHTML="Go Online";
    }
    else{
        counter4.style.opacity="1";
        c4_curr_num.innerHTML = "Available";
        c4_indicator.style.background="green";
        document.getElementById("c4_off")!.innerHTML="Go Offline";
    }
}

function c1CompCurr(){
    var status=document.getElementById("c1_curr_num")!.innerText;
    var button=document.getElementById("c1_call")! as HTMLButtonElement;
    if(status!="Offline" && status!="Available"){
        c1_indicator.style.background="green";
        button.disabled=false;
    }
}

function c2CompCurr(){
    var status=document.getElementById("c2_curr_num")!.innerText;
    var button=document.getElementById("c2_call")! as HTMLButtonElement;
    if(status!="Offline" && status!="Available"){
        c2_indicator.style.background="green";
        button.disabled=false;

    }
}

function c3CompCurr(){
    var status=document.getElementById("c3_curr_num")!.innerText;
    var button=document.getElementById("c3_call")! as HTMLButtonElement;
    if(status!="Offline" && status!="Available"){
        c3_indicator.style.background="green";
        button.disabled=false;
    }
}

function c4CompCurr(){
    var status=document.getElementById("c4_curr_num")!.innerText;
    var button=document.getElementById("c4_call")! as HTMLButtonElement;
    if(status!="Offline" && status!="Available"){
        c4_indicator.style.background="green";
        button.disabled=false;
    }
}

function showAlert() {
    alert ("No tickets in the waiting queue.");
  }

function c1Call(){
    if (queue.size()==0 || queue.size()==null){
        showAlert();
    }
    else{
         var status=document.getElementById("c1_curr_num")!.innerText;
         if(status!="Offline"){
            var ticket_number=queue.dequeue();
            var button=document.getElementById("c1_call")! as HTMLButtonElement ;
            c1_curr_num.innerHTML=ticket_number;
            c1_indicator.style.background="red";
            button.disabled=true;
         }
    }
}

function c2Call(){
    if (queue.size()==0 || queue.size()==null){
        showAlert();
    }
    else{
        var ticket_number=queue.dequeue();
        var button=document.getElementById("c2_call")! as HTMLButtonElement ;
        c2_curr_num.innerHTML=ticket_number;
        c2_indicator.style.background="red";
        button.disabled=true;
    }
}

function c3Call(){
    if (queue.size()==0 || queue.size()==null){
        showAlert();
    }
    else{
        var ticket_number=queue.dequeue();
        var button=document.getElementById("c3_call")! as HTMLButtonElement ;
        c3_curr_num.innerHTML=ticket_number;
        c3_indicator.style.background="red";
        button.disabled=true;
    }
}

function c4Call(){
    if (queue.size()==0 || queue.size()==null){
        showAlert();
    }
    else{
        var ticket_number=queue.dequeue();
        var button=document.getElementById("c4_call")! as HTMLButtonElement ;
        c4_curr_num.innerHTML=ticket_number;
        c4_indicator.style.background="red";
        button.disabled=true;
    }
}
