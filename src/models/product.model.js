export default class ProductModel {
    constructor(id, name, desc, price, imageUrl) {
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.price = price;
      this.imageUrl = imageUrl;
    }
  
    static getAll() {
      return products;
    }
  
    static add(name,desc,price,imageUrl) {
      let newProduct = new ProductModel(
        products.length + 1,
        name,
        desc,
        price,
        imageUrl
      );
      products.push(newProduct);
    }

    static update(productObj) {
      const index = products.findIndex(
        (p) => p.id == productObj.id
      );
      products[index] = productObj;
    }

    static getByID(id){
      return products.find((p)=>p.id==id);
    }
    static delete(id){
      const index = products.findIndex(
        (p) => p.id == id
      );
      products.splice(index,1);
  
    }
  }

  
  var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      4,
      'Product4',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      5,
      'Product5',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      6,
      'Product 6',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      7,
      'Product7',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      8,
      'Product8',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
      9,
      'Product9',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    ),
  ];
  