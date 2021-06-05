class Player{
    constructor(){

    }
    getCount(){
        var ref = database.ref("playerCount")
        ref.on("value",function(data){
            playerCount = data.val()
        })
        
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(name){
        var index = "player" + playerCount
        database.ref(index).set({
            name : name 
        })
    }
}