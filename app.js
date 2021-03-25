let mycaffe = [ 
    {
        name:" Caffe cs1",
        city:"Ha Dong"
    },{
        name:" Caffe cs2",
        city:"Ha Tay"
    },{
        name:" Caffe cs3",
        city:"Ha Nam"
    },{
        name:" Caffe cs4",
        city:"Ha Bac"
    },{
        name:" Caffe cs5",
        city:"Ha Noi"
    },
]
localStorage.setItem('alo', JSON.stringify(mycaffe));

let concua = JSON.parse(localStorage.getItem(mycaffe));

console.log(concua);

