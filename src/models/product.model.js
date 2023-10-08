export default class ProductModel{
    constructor(_id, _title, _author, _price, _img, _amount){
        this.id=_id,
        this.title=_title
        this.author=_author,
        this.price=_price,
        this.img=_img,
        this.amount=_amount
    }
    static get(){
        return products;
    }
}
var products=[
    new ProductModel(
        1,
        "My First Book of Pencil Control",
        "by Wonder House Books | 25 April 2018",
         89,
        "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
        1,
    ),
    new ProductModel (
    
        2,
        "108 Panchatantra Stories",
        "by Maple Press  | 1 September 2020",
        98,
        "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
        1,
    ),
    new ProductModel(
        3,
        "Amazing Questions & Answers Science",
        "by Om Books Editorial Team  | 25 November 2018",
         143,
        "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
        1,
    )

]