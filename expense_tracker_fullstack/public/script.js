const form = document.getElementById('expenseForm');
const list = document.getElementById('expenseList');

let editId = null;

async function fetchExpenses() {
    const res = await fetch('/api/expenses/all');
    const expenses = await res.json();

    list.innerHTML = '';

    expenses.forEach(exp => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `
            ${exp.description} - ₹${exp.amount} (${exp.category})
            <div>
                <button onclick="editExpense(${exp.id}, '${exp.description}', ${exp.amount}, '${exp.category}')" class="btn btn-sm btn-warning me-2">Edit</button>
                <button onclick="deleteExpense(${exp.id})" class="btn btn-sm btn-danger">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        description: form.description.value,
        amount: parseFloat(form.amount.value),
        category: form.category.value
    };

    if (editId) {
        await fetch(`/api/expenses/edit/${editId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        editId = null;
    } else {
        await fetch('/api/expenses/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    form.reset();
    fetchExpenses();
});

async function deleteExpense(id) {
    await fetch(`/api/expenses/delete/${id}`, { method: 'DELETE' });
    fetchExpenses();
}

function editExpense(id, description, amount, category) {
    editId = id;
    form.description.value = description;
    form.amount.value = amount;
    form.category.value = category;
}

fetchExpenses();
