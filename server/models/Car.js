const carSchema = new mongoose.Schema({
  make: { type: String, required: true }, // e.g., BMW
  model: { type: String, required: true }, // e.g., M4 Competition
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: Number,
  fuelType: String,
  transmission: String,
  engineSize: String,
  images: [String], // Cloudinary URLs
  description: String,
  features: [String], // e.g., Sunroof, Leather Seats
  isSold: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});