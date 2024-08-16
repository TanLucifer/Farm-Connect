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
    
        const farmerId = req.farmer.id; // Assuming farmer's ID is available from req.user
    
        // Validate mandatory fields
        if (
          !SKU ||
          !productname ||
          !productprice ||
          !productdescription ||
          !stock ||
          !category ||
          !productImage ||
          !shelfLife ||
          !returnPolicy
        ) {
          return res.status(400).json({ message: 'Missing required fields' });
        }
    
        // Check if the farmer exists
        const farmer = await Farmer.findById(farmerId);
        if (!farmer) {
          return res.status(404).json({ message: 'Farmer not found' });
        }
    
        // Create new product
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
    
        await newProduct.save();
    
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
      } catch (error) {
        console.error('Error creating product:', error.message);
        res.status(500).json({ message: 'Internal server error creating product' });
      }
    };



