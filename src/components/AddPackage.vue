<!-- <template>
    <div>
      <h2>Add Product</h2>
      <input v-model="newPackage.packName" placeholder="Product Name" />
      <input v-model="newPackage.packDescription" placeholder="Description"/>
      <input v-model="newPackage.packavaiblity" placeholder="Description" type="number" step="0.01" />
      <input v-model="newPackage.Category" placeholder="Category" />
      <input v-model="newPackage.packUrl" placeholder="packUrl" />
      <button @click="addPackage">Add Product</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        newProduct: {
          prodName: "",
          amount: 0,
          prodUrl: "",
        },
      };
    },
    methods: {
        async addProduct() {
      try {
        const response = await axios.post('https://fullstackeomp1.onrender.com/add-product', this.newProduct);
        alert(response.data.msg); 
        this.newProduct = {
          prodName: "",
          quantity: 0,
          amount: 0,
          Category: "",
          prodUrl: "",
        };
        this.fetchPackages();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
      resetForm() {
        // Reset the form after successful add
        this.newPackage.prodName = "";
        this.newPackage.quantity = 0;
        this.newPackage.amount = 0;
        this.newPackage.Category = "";
        this.newPackage.prodUrl = "";
      },
      populateForm(product) {
      this.newPackage.prodName = product.prodName;
      this.newPackage.quantity = product.quantity;
      this.newPackage.amount = product.amount;
      this.newPackage.Category = product.Category;
      this.newPackage.prodUrl = product.prodUrl;
    },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
   -->