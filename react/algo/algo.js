function twoSums(arr, target){

    let seen = {}

    for (let i = 0; i < array.length; i++) {
        let currentValue = arr [i];
        let delta = target -currentValue
        if (seen.hasownerproperty(delta)){
            return [seen[delta], i]
        }
        seen[currentvalue]=i
        console.log(seen)

        
    }
}
console.log(twoSums([2,11,7,15],9));
console.log(twoSums([2,11,7,15],9));