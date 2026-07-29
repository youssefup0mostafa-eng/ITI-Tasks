import { useState } from "react";
import Recieve from '../Recieve/Recieve'

export default function Send() {
    let prodArray = [
        {id:1, pName: "Samsung", price: 3000, onSale: false, desc: "Samsung Mobile Phone", count: 0},
        {id:2, pName: "Oppo", price: 5000, onSale: false, desc: "Oppo Mobile Phone", count: 0},
        {id:3, pName: "TV", price: 10000, onSale: true, desc: "Smart TV", count: 0},
        {id:4, pName: "PC", price: 12000, onSale: true, desc: "Highend PC", count: 0},
        {id:5, pName: "Camera", price: 30000, onSale: true, desc: "DSLR Camera", count: 0},
        {id:6, pName: "iPad", price: 15000, onSale: false, desc: "Apple iPad", count: 0},
        {id:7, pName: "Tab", price: 4500, onSale: true, desc: "Android Tab", count: 0},
    ]

    let [products , setProducts] = useState(prodArray)
    function delProd(prodId) {
        setProducts(products.filter ( (product) =>product.id !== prodId) )

    }

    return (
        <>
    <div className="container text-2x1 bg-info p-4">
        <div className="row">
        {products.map( (product) => <Recieve product=
        {product} deleteProduct={delProd} />)}
        </div>
    </div>
        </>
    );
}
