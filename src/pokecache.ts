
export type CacheEntry<T>={
    createdAt : number;
    val: T
}
export class Cache{
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

 constructor(interval:number) {
    this.#interval=interval;
    this.#startReapLoop();
 }

 add<T>(key:string,val:T):void {
    // adds a new entry to the cache object.
    const entry:CacheEntry<T>={
        createdAt : Date.now(),
        val: val,
    }
    this.#cache.set(key,entry);
 }

 get<T>(key:string):T|undefined{
    // returns some object. Return undefined if the entry is missing.
  const entry = this.#cache.get(key);
  return entry ? (entry.val as T) : undefined;
}


 #reap(){
    // to delete any entries that are older than the interval. 
    // It should loop through the cache and delete any entries that are older than 
    // Date.now() - this.#interval.
    const now = Date.now();
    for( const [key,entry] of this.#cache){
          if ( (now - this.#interval) > entry.createdAt) 
            this.#cache.delete(key);
    }
 }
 #startReapLoop():void{
    // setInterval() 
    // to call this.#reap() after a delay of this.#interval 
    // and store the interval ID in this.#reapIntervalId.
     this.#reapIntervalId = setInterval(() => {
     this.#reap();
  }, this.#interval);
 }

 stopReapLoop(){
    // uses clearInterval() to stop the reap loop and set this.#reapIntervalId back to undefined.
    if(this.#reapIntervalId){
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId=undefined;
    }
     
 } 
}