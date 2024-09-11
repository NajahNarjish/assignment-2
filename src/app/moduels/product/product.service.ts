import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// trying update
const updateSingleProductFromDB = async (_id: string, updateData: any) => {
  // const result = await ProductModel.updateOne({ _id });
  const result = await ProductModel.findByIdAndUpdate(_id, updateData, {
    new: true,
  });
  return result;
};
//trying update ends

// trying delete
const deleteSingleProductFromDB = async (_id: string) => {
  // const result = await ProductModel.updateOne({ _id });
  const result = await ProductModel.findByIdAndDelete({ _id });
  return result;
};
//trying delete ends

// trying to search items
const searchProductFromDB = async (searchQuery: string) => {
  const products = await ProductModel.find({ name: searchQuery });

  return products;
};
//trying to search items end

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
  searchProductFromDB,
};
