import { Schema, model, connect } from 'mongoose';
import { Inventory, Product, Variant } from './product.interface';

const variantSchema = new Schema<Variant>({
  type: String,
  value: String,
});
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

//main schema below
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [String],
  variants: [variantSchema],
  inventory: inventorySchema,
});

const Product = model<Product>('Product', productSchema);
