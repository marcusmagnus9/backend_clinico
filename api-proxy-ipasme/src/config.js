import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://luisdimas9:Kahandimas.2022@cluster0.tlbkz.mongodb.net/api-gateway?retryWrites=true&w=majority",
  PORT: process.env.PORT || 3000,
  SECRET: '95f7afd12e660e076c04084c0e0e720b3e30b8ae106981feefcf5adf5278ac84'
};
