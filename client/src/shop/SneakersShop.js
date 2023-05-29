import {makeAutoObservable} from "mobx";

export default class SneakersShop {
    constructor() {
        this._sneakers = [
            {id:1, name: "Air Jordan 4 Retro Kaws", article: 584568, material: "Натуральная кожа", description: "Модель, созданная в коллаборации с художником KAWS. Сочетание гладкой и фактурной замши, графичный дизайн в привычном стиле художника, свисающая бирка сбоку, обтянутые замшей боковины 'Wings', обтянутая замшей массивная подошва со светящимися в темноте вставками. Каждое изделие проходит строгую процедуру аутентификации, которая позволяет подтвердить состояние вещи, а также историю ее происхождения и владения.", price: 500, rating: 5, img1: "https://i.pinimg.com/originals/44/58/bb/4458bb1d2f5cea971695245a43e4c05a.jpg", img2: "https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/930155-003/5.png", img3: "https://sneakerworld.dk/wp-content/uploads/2017/03/KAWS-x-Nike-Air-Jordan-4.jpg", categoryID:1}
        ]
        makeAutoObservable(this)
    }

    setSneakers(sneakers) {
        this._sneakers = sneakers
    }

    get sneakers() {
        return this._sneakers
    }


}