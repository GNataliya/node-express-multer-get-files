const formEl = document.forms.setFiles;
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/picture', formData);
    console.log('res:', data)
})