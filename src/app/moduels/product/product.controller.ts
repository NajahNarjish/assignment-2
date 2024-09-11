import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { truncateSync } from 'fs';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const { searchQuery } = req.query;
  if (searchQuery !== undefined) {
    searchProduct(req, res);
    return;
  }

  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// update single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateSingleProductFromDB(
      productId,
      updateData,
    );
    res.status(200).json({
      success: true,
      message: 'Product is updated successfully',
      data: result,
    });
  } catch (err) {
    console.log('failed to update product', err);
  }
};
//update single product ends

// delete single product
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product is deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log('failed to delete product', err);
  }
};
// delete single product ends

//  search product
const searchProduct = async (req: Request, res: Response) => {
  const { searchQuery } = req.query;
  console.log('you print here: ' + searchQuery);
  try {
    const result = await ProductServices.searchProductFromDB(searchQuery);

    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Product is searched successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No product is found',
      });
    }
  } catch (err) {
    console.log('failed to search product', err);
  }
};
// search product ends

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProduct,
};
