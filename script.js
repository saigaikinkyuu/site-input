document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const jsonOutput = document.getElementById('jsonOutput');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const formDataObject = {};

        formData.forEach(function (value, key) {
            formDataObject[key] = value;
        });

        const jsonData = JSON.stringify(formDataObject, null, 2);
        jsonOutput.textContent = jsonData;
    });
});
