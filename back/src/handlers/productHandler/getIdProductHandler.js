const getProductById = require("../../controllers/productControllers/getProductByIdController");

const getIdProductHandler = async (req, res) => {
	try {
		const id_Product = req.params.id;
		//console.log(`ID del producto recibido: ${id_Product}`); // Agregar console log para imprimir el ID del producto
		const product = await getProductById(id_Product);
		res.status(200).json(product);
	} catch (error) {
		console.error("Error al buscar el producto:", error);
		res.status(500).json({ error: "Error interno del servidor" });
	}
};

module.exports = getIdProductHandler;
