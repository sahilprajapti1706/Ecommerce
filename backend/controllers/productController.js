import productModel from '../models/productModel.js';
import { cloudinary } from '../config/cloudinary.js';


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        console.log(name, description, price, category, subCategory, sizes, bestseller);
        console.log(req.files);
        
        const images = [req.files.image1, req.files.image2, req.files.image3, req.files.image4]
            .filter(Boolean)
            .map(files => files[0]);

        const uploadToCloudinary = (file) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { resource_type: 'image' },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result.secure_url);
                    }
                );

                uploadStream.end(file.buffer);
            });
        };

        let imageUrls = await Promise.all(
            images.map(file => uploadToCloudinary(file))
        );


        

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true",
            image: imageUrls,
            date: Date.now(),
        };
        console.log("Image URLs:", imageUrls);
        console.log("Product Data:", productData);

        const product = new productModel(productData);
        await product.save();
        console.log("Done");
        res.json({
            success: true,
            message: "Product added successfully"
        })

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({
            success: true,
            products
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Product removed successfully"
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId);
        res.json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addProduct, listProduct, removeProduct, singleProduct }