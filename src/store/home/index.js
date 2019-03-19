import {
    observable,computed,action
} from "mobx"
class Home {
    @observable
        name = "ja"
    @computed
        get otherName(){
            return this.name + "good"
        }
    @action 
        add(){
            console.log("add",this)
            
            this.props.store.home.name = "newa"
        }
}

const home = new Home()

export default home;