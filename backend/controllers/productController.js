import Product from '../models/productModel.js'; 
import Farmer from '../models/farmerModel.js';


export const createProductController = async (req,res)=>{
    try {
        const {
          SKU,
          productname,
          productprice,
          productdescription,
          stock,
          category,
          productImage,
          shelfLife,
          discountpPrice,
          minOrder,
          maxOrder,
          shippingCost,
          returnPolicy,
         
        } = req.body;
        console.log(req.body);
        
        const farmerId = "66be074e14caafd922277d4d"; 
    
        // if (
        //   !SKU ||
        //   !productname ||
        //   !productprice ||
        //   !productdescription ||
        //   !stock ||
        //   !category ||
          
        //   !shelfLife ||
        //   !returnPolicy
        // ) {
        //   return res.status(400).json({ message: 'Missing required fields' });
        // }
    
        const farmer = await Farmer.findById(farmerId);
        if (!farmer) {
          return res.status(404).json({ message: 'Farmer not found' });
        }
    
        const newProduct = new Product({
          SKU,
          productname,
          productprice,
          productdescription,
          stock,
          category,
          productImage,
          shelfLife,
          discountpPrice,
          minOrder,
          maxOrder,
          shippingCost,
          returnPolicy,
          createdBy: farmerId,
        });
         console.log(req.body);
            
        await newProduct.save();
    
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
      } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(500).json({ message: 'Internal server error creating product' });
      }
    };



export const getAllProduct = async (req,res) =>{
  try {
 const allProducts =await  Product.find()
 res.status(200).json({products: allProducts}) 
    
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Internal server error fetching products.' });
    
  }
}