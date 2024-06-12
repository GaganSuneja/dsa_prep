// P1
// AAAAAAAAAAAAAAAAA

// {A: 1}
// {l = 1, r= 20}

// {A: 20}

// AAAAAAAAAAAAAAAAA

// CTCTXZUC
// 121
// "ABCD"
//  ""
// retrun minimum length string of str1 which has all char of STR2


// {C: 1, T: 1, U: 1}

// {C: 0, T: 1, U: 1}

// l = 6 , r= 7 = 3

// const str1  = "ABNCTCTUYUNHHHHGTY" ;
// const str2="CTU" ;

// var minSubString = function(str1, str2) {
//     let str2Map = new Map();
//     let windowMap = new Map();
//     str2.split('').forEach((c) => {
//         let obj = str2Map.get(c);
//         if(obj) {
//             str2Map.set(c, obj+1)
//         } else {
//              str2Map.set(c, 1);
//              windowMap.set(c, 0);
//         }
//     })
    
//     let str1Array = str1.split('');
//     let left = 0;
//     let right = 0;
//     // ABNCTCTUYUNHHHHGTY
//     // CTU 
//     let minSize = str1Array.length;
//     while(right < str1Array.length }{
//         right+=1;
//         let char = str1Array[right];  
//         let windowSize = 1;
//         if(windowMap.has(char)) {
//             let count = windowMap.get(char);
//             windowMap.set(char, count + 1)
//         }
//         if(helper(windowMap, str2Map)) {
//             windowSize = right - left + 1;
//             if(windowSize < minSize) {
//                 minSize = windowSize;
//             }
//         }
        
//         while(!helper(windowMap, str2Map)) {
//             if()
//         }
//     }
   
// }

// let helper = function(map1, map2) {
//     let keys = map1.keys();
//     for(let i = 0;i<keys.length;i++) {
//         if(map1.get(keys[i]) < map2.get(keys[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// minSubString('AA', 'AVVDDSS')

// HTML     
// HEAD                BODY
// DIV H1  H4            H2     H3      // N
// HTML
// DIv, H1, H4, H2, H3, null
// root =  {
// tag: "HTML",
// child: Node[]
// }

// Target = Node {
// tag: "H1"
// }

    