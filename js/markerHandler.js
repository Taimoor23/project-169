AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var orderSummaryButton=document.getElementById("order-summary-button")
        var orderButton=document.getElementById("order-button")

        orderSummaryButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"work in progress"
            })
        })
        orderButton.addEventListener("click",()=>{
            swal({
                icon:"assets/thumbs-up-like-gesture-512.webp",
                title:"thanks for your order",
                text:"Your order is coming please wait!",
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})