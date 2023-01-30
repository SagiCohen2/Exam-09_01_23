var info = [];

const productsInfo = () => {
    let newProduct = new Object();
    newProduct.ProductName = document.getElementById("product").value;
    newProduct.ProductPrice = document.getElementById("price").value;
    newProduct.ProductCategory = document.getElementById("category").value;
    newProduct.ProductImage = document.getElementById("imageLink").value;
    //console.log(productsInfo);
    //console.log(ProductName,ProductPrice,ProductCategory,ProductImage);
    info.push(newProduct);
    tableData();    
    document.getElementById("resetForm").reset();
}

const tableData = () => {
    const newData = document.getElementById("infoList");
    var data = "";
    info.map((item) => {
        data += `
        <tr>
            <td>${item.ProductName}</td>
            <td>${item.ProductNumber}</td>
            <td>${item.ProductCategory}</td>
            <td><img src="${item.ProductImage}" width=50/</td>
        </tr>    
        `;
    });
    
    newData.innerHTML = data;
}; 

