const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Property name is required"],
      trim: true,
    },
    slug: String,
    images: [String], // URLs to property images
    description: {
      type: String,
      required: [true, "Property description is required"],
      trim: true,
    },

    address: {
      locality: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: {
        type: String,
        required: true,
        match: [/^[1-9][0-9]{5}$/, "Invalid pincode"],
      },
    },

    propertyType: {
      type: String,
      enum: ["Town_House", "Modern_Villa", "Apartment"],
      required: true,
    },

    rooms: {
      type: [
        {
          bedrooms: { type: Number, required: true },
          price: { type: Number, required: true },
          ac: { type: Boolean, default: false },
        },
      ],
      validate: {
        validator: function (array) {
          return array.length >= 1;
        },
        message: "At least one room element is required.",
      },
      required: true,
    },

    minPrice: { type: Number, required: true },
    maxPrice: { type: Number, required: true },

    contactInfo: {
      phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Invalid phone number"],
      },
      email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
      },
    },

    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Property must belong to a User"],
    },

    nearbyPlaces: [
      {
        placeName: { type: String },
        distance: { type: Number },
      },
    ],

    ratingsAverage: {
      type: Number,
      default: 4,
      set: (val) => Math.round(val * 10) / 10, // Rounded to 1 decimal place
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },

    updated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Pre-save middleware to create slug from the name
propertySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Virtual field for reviews
propertySchema.virtual("reviews", {
  ref: "Review",
  foreignField: "property",
  localField: "_id",
});

// Populate the property owner details when querying
propertySchema.pre(/^find/, function (next) {
  this.populate({
    path: "owner",
    select: "name email -_id", // Populate only name and email
  });
  next();
});

// Index for geospatial queries if needed
propertySchema.index({ location: "2dsphere" });

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
