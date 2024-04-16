const productos = [
    {
        id:"Asw1324",
        nombre:"Uñas acrilicas",
        descripcion:"para que tus uñas brillen",
        category:"Uñas",
        precio: 8000,
        fulldescripcion:"Hechas con monomero y polimero secadas al aire",
        imagen:"https://hotmart.s3.amazonaws.com/product_pictures/163a24e8-0bcd-4e71-b7e0-1b030d0db8b7/47eb8ab59afa6e171857d93cf06eae52.jpg"
    }, 
    {
        id:"Jsw1344",
        nombre:"Uñas polygel",
        descripcion:"para extender tus uñas",
        category:"Uñas",
        precio: 10000,
        fulldescripcion:"Hechas con polygel y polysolution",
        imagen:"https://mejorconsalud.as.com/wp-content/uploads/2023/01/unas-polygel.jpg"
    }, 
    {
        id:"Hsw1654",
        nombre:"Uñas softgel",
        descripcion:"para decorar tus uñas ",
        category:"Uñas",
        precio: 9000,
        fulldescripcion:"Hechas con tip y secado en cabina",
        imagen:"https://mollylac.es/wp-content/uploads/2022/09/curso-soft-gel.jpg"
    },
    {
        id:"Gwr3276",
        nombre:"esmaltado de pies",
        descripcion:"dale color a tus pies ",
        category:"Belelleza de Pies",
        precio: 5000,
        fulldescripcion:"Un esmaltado y corte de cuticula para la belleza de tus pies",
        imagen:"https://dcdn.mitiendanube.com/stores/446/420/products/pies-21-24fc68eec0fef885da16880435446582-1024-1024.jpeg"
    },
    {
        id:"Wsy1314",
        nombre:"pies en parafina",
        descripcion:"para relajar tus pies ",
        category:"Belleza de Pies",
        precio: 8500,
        fulldescripcion:"Baño en parafina para relajar y embellecer tus pies",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4GygoLSNnTNBgAnlWgAAtrNILvNe387wGFl3Ax6tAw&s"
    },
    {
        id:"Rmw1253",
        nombre:"torno",
        descripcion:"preciso y potenete",
        category:"Maquinas",
        precio: 35000,
        fulldescripcion:"Potente torno con fuerza de desgaste unica",
        stock:3,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_846359-MLA49406709166_032022-O.webp"
    },
    {
        id:"Vdf1267",
        nombre:"cabina",
        descripcion:"cabina de secado",
        category:"Maquinas",
        precio: 15000,
        fulldescripcion:"Cabina con luces uv para el secado de tus diseños",
        stock:2,
        imagen:"https://http2.mlstatic.com/D_NQ_NP_673966-MLA51700152532_092022-O.webp"
    },

]
const getProducts=new Promise ((resolve , reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 3000);
}); 

    export default getProducts