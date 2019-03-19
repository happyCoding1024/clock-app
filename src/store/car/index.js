import {
    observable,computed,action
} from "mobx"
class Car {
    @observable
        age = 1
    @computed
        get douleAge(){
            return this.age + 2
        }
    @action 
        add(){

            this.props.store.car.age ++
            fetch("/data/data.json")
                .then(res=>res.json())
                .then(result=> console.log(result))
                .catch(err=> console.log(err)
                )
                
        }
}


export default new Car();