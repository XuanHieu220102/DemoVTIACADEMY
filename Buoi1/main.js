// // Hàm này tải dữ liệu từ một API bất đồng bộ và trả về một Promise
// // function fetchData() {
// //     return new Promise((resolve, reject) => {
// //       // Simulate a network request with setTimeout
// //       setTimeout(() => {
// //         const randomNumber = Math.random();
// //         if (randomNumber < 0.7) {
// //           // Giả định thành công nếu số ngẫu nhiên < 0.7
// //           resolve(`Dữ liệu đã được tải: ${randomNumber}`);
// //         } else {
// //           // Giả định thất bại nếu số ngẫu nhiên >= 0.7
// //           reject("Lỗi: Không thể tải dữ liệu");
// //         }
// //       }, 3000); // Tạo một delay giống như việc tải dữ liệu thực tế
// //     });
// //   }

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random();
//             if(random < 0.5){
//                 resolve("Thanh cong: " + random)
//             }else{
//                 reject("That bai")
//             }
//         }, 2000)
//     })
// }

//   // Sử dụng Promise
//   fetchData()
//     .then((data) => {
//       console.log(data); // Xử lý dữ liệu thành công
//     })
//     .catch((error) => {
//       console.error(error); // Xử lý lỗi nếu có
//     });
  

let arr = [1, [2, 3], 4, [5, 6], 7]

let newArr = arr.map(item => item*2)

const rs = newArr.filter(item => {
    return item > 5;
})
console.log(rs);

const rs2 = rs.reduce((sum, val, index) => {
    console.log(index);
    return sum + val
}, 10)

console.log(rs2);

let arr2 = [1, [2, 3], 4, [5, 6], 7]

const rs3 = arr2.reduce(function(abcd, val){
    return abcd.concat(val)
},[])

console.log(rs3);
