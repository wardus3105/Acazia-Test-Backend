const mutateTheArray = (n,a) => {
    let b = [];
    for(let i=0;i<n;i++) {
        b.push((a[i-1] || 0)  + (a[i] || 0 ) + (a[i+1] || 0));
    }
    return b;
};

let a = [4,0,1,-2,3];
let n = 5;
let b = mutateTheArray(n,a);
console.log(b);
