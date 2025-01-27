const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const price = document.getElementById("price").value;
    const dish = document.getElementById("dish").value;
    const table = document.getElementById("table").value;

    if (price && dish && table) {
        const orderData = {
            price: price,
            dish: dish,
            table: table,
        };

        axios.post('https://crudcrud.com/api/6fa73c706c3b4b5f81c3715ecd09bc42/orders', orderData)
            .then(function(response) {
                displayOrder(response.data);
            })
            .catch(function(error) {
                console.error('Error adding order:', error);
            });

       
        document.getElementById("price").value = '';
        document.getElementById("dish").value = 'Select a dish';
        document.getElementById("table").value = 'Select a table';
    }
});

function displayOrder(order) {
    const { price, dish, table, _id } = order;
    const orderText = `${price} - ${dish} - ${table}`;

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `${orderText} <button class="btn btn-danger btn-sm float-end" onclick="deleteOrder('${_id}', this)">Delete</button>`;
    
    const tableOrders = document.getElementById(`${table.replace(" ", "").toLowerCase()}-orders`);
    tableOrders.appendChild(listItem);
}

function deleteOrder(id, button) {
    axios.delete(`https://crudcrud.com/api/6fa73c706c3b4b5f81c3715ecd09bc42/orders/${id}`)
        .then(function() {
            const listItem = button.closest('li');
            listItem.remove();
        })
        .catch(function(error) {
            console.error('Error deleting order:', error);
        });
}


document.addEventListener('DOMContentLoaded', function() {
    axios.get('https://crudcrud.com/api/6fa73c706c3b4b5f81c3715ecd09bc42/orders')
        .then(function(response) {
            response.data.forEach(function(order) {
                displayOrder(order);
            });
        })
        .catch(function(error) {
            console.error('Error loading orders:', error);
        });
});
