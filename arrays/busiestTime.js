function findBusiestPeriod(data) {
    let maxTimeStamp = 0;
    let currentMax = 0;
    let n = data.length;
    let max = 0;
    for(let i=0;i<data.length;i++) {
        let time = data[i][0];
        while(i<n && data[i][0]==time) {
            currentMax+=(data[i][2] == 1)? data[i][1] : -data[i][1];
            i++;
        }

        if(currentMax > max) {
            max = currentMax;
            maxTimeStamp = time;
        }

        i-=1;

    }


    return maxTimeStamp;
}


let data = [
[1487799425, 14, 1], 
[1487799425, 4,  0],
[1487799425, 2,  0],
[1487800378, 10, 1],
[1487801478, 18, 0],
[1487801478, 18, 1],
[1487901013, 1,  0],
[1487901211, 7,  1],
[1487901211, 7,  0] ]