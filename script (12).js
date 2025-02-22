document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("revenueChart")) {
        const ctx = document.getElementById("revenueChart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Tax Levy", "State Aid", "Local Receipts"],
                datasets: [{
                    label: "FY26 Proposed",
                    data: [9276259, 730906, 1619684],
                    backgroundColor: ["#2a7d2e", "#1e5b24", "#ffd700"]
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    if (document.getElementById("expenditureChart")) {
        const ctx = document.getElementById("expenditureChart").getContext("2d");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["General Gov", "Public Safety", "Public Works", "Education"],
                datasets: [{
                    data: [500000, 1500000, 700000, 5000000],
                    backgroundColor: ["#2a7d2e", "#1e5b24", "#ffd700", "#ff5733"]
                }]
            },
            options: {
                responsive: true
            }
        });
    }
});
