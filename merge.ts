interface Merge {
    merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[];
}

class ToMerge implements Merge {
    merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
        let i = 0;
        let j = 0;
        let k = collection_3.length - 1;
        let result: number[] = [];

        while(i < collection_1.length && j < collection_2.length && k > 0) {

            if(collection_1[i] < collection_2[j]) { //Check for collection_1 first
                if(collection_1[i] < collection_3[k]) {
                    result.push(collection_1[i]);
                    i++
                } else {
                    result.push(collection_3[k]);
                    k--;
                }
                continue;
            }

            if(collection_2[j] < collection_3[k]) { //Second condition, what if j-th in collection_2 is less than i-th in collection_1, we need to check in collection_3 as well
                result.push(collection_2[j]);
                j++;
            } else {
                result.push(collection_3[k]);
                k--;
            }
        }
        return result;
    }
}