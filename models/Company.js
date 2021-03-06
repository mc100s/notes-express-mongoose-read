const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  permalink: String,
  crunchbase_url: String,
  homepage_url: String,
  blog_url: String,
  blog_feed_url: String,
  twitter_username: String,
  category_code: String,
  number_of_employees: Number,
  founded_year: Number,
  deadpooled_year: Number,
  tag_list: String,
  alias_list: String,
  email_address: String,
  phone_number: String,
  description: String,
  created_at: String,
  updated_at: String,
  overview: String,
  image: {
    available_sizes: Array
  },
  products: Array,
  acquisitions: Array
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;

