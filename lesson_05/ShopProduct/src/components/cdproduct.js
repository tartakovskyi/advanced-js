import ShopProduct from './shopproduct';

function CdProduct(title,price,playLength) {

	this.playLength = playLength;
	ShopProduct.call(this,title,price)
}

CdProduct.prototype = Object.create(ShopProduct.prototype);
CdProduct.prototype.constructor = CdProduct;

BookProduct.prototype.getPlayLength = function() {
	return this.playLength;
}

export default CdProduct;