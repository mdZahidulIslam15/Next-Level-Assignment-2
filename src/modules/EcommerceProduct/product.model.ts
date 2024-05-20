import { Schema, model } from "mongoose";
import { Inventory, ProductDetails, Variant } from "./product.interface";

const VariantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: [true, "define a product type"],
  },
  value: {
    type: String,
    required: [true, "specific value needed"],
  },
});

const InventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, "Set the product quentity"],
  },
  inStock: {
    type: Boolean,
    required: [true, "Stock must be required"],
  },
});

const ProductDetailsSchema = new Schema<ProductDetails>({
  name: {
    type: String,
    required: [true, "product name is required"],
  },
  description: {
    type: String,
    required: [true, "Description needed for this product"],
  },
  price: {
    type: Number,
    required: [true, "Price must be needed"],
  },
  category: {
    type: String,
    required: [true, "Category Needed"],
  },
  tags: {
    type: [String],
    required: [true, "create some tags"],
  },
  variants: {
    type: [VariantSchema],
    required: [true, "Add productVariant"],
  },
  inventory: {
    type: InventorySchema,
    required: [true, "product inventory needed"],
  },
});

const ProductModel = model<ProductDetails>("EcomProduct", ProductDetailsSchema);
