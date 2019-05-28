//we can create private variables using # in classes

class IncrementCounter {
    #count = 0;
    get() {
        console.log("Getting the count");
        console.log(this.#count);
        return this.#count;
    }
    set(){
        this.#count++
    }
}

const counter = new IncrementCounter();

counter.set();
counter.set();
counter.get();
console.log(counter.count);//not able to access the private variable