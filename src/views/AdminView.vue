
<template>
  <div class="products vh-100">
    <h1 class="display-1">
      <router-link :to="{ name: currentPage === 'admin' ? 'user' : 'admin' }">
        {{ currentPage === 'admin' ? 'USERS PAGE' : 'ADMIN PAGE' }}
      </router-link>
    </h1>
    <div class="add-product">
      <input v-model="packID" type="text" placeholder="ID">
      <input v-model="packName" type="text" placeholder="Name">
      <input v-model="quantity" type="number" placeholder="Quantity">
      <input v-model="amount" type="number" placeholder="Amount">
  
      <input v-model="prodUrl" type="text" placeholder="Product Image URL">
      <button class="add" @click="postProduct">Add</button>
    </div>
    <table class="table-admin">
      <thead>
        <tr class="tb">
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Product Image</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody class="tb">
        <tr v-for="product in products" :key="product.prodID">
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.amount }}</td>
       
          <td>
            <img :src="product.prodUrl" alt="Product Image" style="max-width: 100px; max-height: 100px;">
          </td>
          <td><button  class="edit" @click="editProduct(product.prodID)">edit</button> </td>
          <td><button class="delete" @click="deleteProduct(product.prodID)">delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
computed: {
  currentPage() {
    return this.$route.name;
  }
},
setup() {
  const store = useStore();

  const products = computed(() => store.getters.allProducts);

  onMounted(() => {
    store.dispatch('fetchProducts');
  });

  const prodID = ref(null);
  const prodName = ref(null);
  const quantity = ref(null);
  const amount = ref(null);
  const prodUrl = ref(null);
  const editMode = ref(false);
  let editproduct = null;

  const deleteProduct = (prodID) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      store.dispatch('deleteProduct', prodID);
      window.alert('Product has been deleted.');
    }
  };

  const editpackage = (packages) => {
editMode.value = true;
editproductId = product.prodID;
prodID.value = product.prodID;
prodName.value = product.prodName;
quantity.value = product.quantity;
amount.value = product.amount;
prodUrl.value = product.prodUrl;
};

  const saveEdit = () => {
    const editedpackage = {
      packID: packID.value,
      packName: packName.value,
      packDescription: Description.value,
      packavaiblity: avaiblity.value,
      packamount: amount.value,
      packUrl: packUrl.value
    };
    store.dispatch('updatepackages', editedpackage);
    editMode.value = false;
    clearFields();
  };

  const clearFields = () => {
    packID.value = null;
    packName.value = null;
    packDescription.value = null;
    packavaiblity.value = null;
    packamount.value = null;
    packUrl.value = null;
  };

  const cancelEdit = () => {
    editMode.value = false;
    clearFields();
  };

  const postPackage = () => {
    const newPackage = {
      packName: packName.value,
      packDescription: Description.value,
      packavaiblity: avaiblity.value,
      packamount: amount.value,
      packUrl: packUrl.value
    };
    store.dispatch('postPackage', newPackage);
    clearFields();
    window.alert('Package has been added.');
  };

  return {
    packages,
    packID,
    packName,
    packDescription,
    packavaiblity,
    packamount,
    packUrl,
    editMode,
    editPackage,
    saveEdit,
    cancelEdit,
    deletePackages,
    postPackages
  };
}
};
</script>

<style scoped>


.products{
  background-image: url('https://i.ibb.co/ftTYC1L/images-4.jpg');
  background-size: cover;
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  text-align: left;
  padding: 5px;
}


.add-product {
display: flex;
padding:20px;
gap:10px;
margin: 0 0 0 8%;
border: 5px;
border-radius: 20px solid black;

}
.edit{
padding: 13px;
border: 4px;
border-radius: 11px;
background-color: white;
color: black;
}
.delete{
padding: 10px;
border: 3px;
border-radius: 10px;
background-color: black;
color: yellow;

}
.delete:hover{
background-color: purple;
}
.edit:hover{
background-color: purple;
}
.input-field {
margin-right: 10px;
}

.add {
padding: 8px 16px;
background-color: purple;
color: white;
border-radius: 5px  ;
cursor: pointer;
}

.add-button:hover {
background-color: #0056b3;
}






</style>
