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
        var element = this.queue.shift();
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
        var element = this.queue.pop();
        return element;
    }

    getQueue(){
        return this.queue;
    }

    size():number{
        return this.queue.length;
    }
}






