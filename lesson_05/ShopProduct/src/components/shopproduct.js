function ShopProduct(title,price) {

	this.title = title;
	this.price = price;
}

ShopProduct.prototype.getTitle = function() {
	return this.title;
}

ShopProduct.prototype.setTitle = function(title) {
	this.title = title;
}

ShopProduct.prototype.getPrice = function() {
	return this.price;
}

ShopProduct.prototype.setPrice = function(price) {
	this.price = price;
}

ShopProduct.prototype.getInfo = function() {
	return this.title + ': ' + this.price;
}

export default ShopProduct;