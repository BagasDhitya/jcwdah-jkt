import data from './data/products.json' with {type: 'json'}

interface Product {
    id: number,
    name: string,
    price: number,
    stock: number
}

class ProductManagement {
    private product: Product[] = data

    getAllProducts(){
        return this.product
    }

    getProductById(id: number){
        return this.product.find((product: Product) => product.id === id)
    }

    // operasi CRUD lainnya
}

const productManagement = new ProductManagement()
// console.log(productManagement.getAllProducts())
console.log('Ambil produk id 2 : ', productManagement.getProductById(2))