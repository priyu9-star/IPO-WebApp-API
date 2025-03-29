
const mongoose = require('mongoose');

const ipoSchema = new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  pricePerShare: { type: Number, required: true },
  totalShares: { type: Number, required: true },
  openDate: { type: Date, required: true },
  closeDate: { type: Date, required: true },
  logo: { type: String, required: true },  // Store logo filename
  createdAt: { type: Date, default: Date.now }
});

// Normalize data before saving
ipoSchema.pre('save', function (next) {
  this.companyName = this.companyName.trim();
  this.openDate = new Date(this.openDate);
  this.closeDate = new Date(this.closeDate);
  next();
});

const IPO = mongoose.model('IPO', ipoSchema);

module.exports = IPO;
