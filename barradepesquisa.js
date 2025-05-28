document.addEventListener('DOMContentLoaded', function () {
    const items = [
        { name: "Omera 1", link: "omera1_prensas_fabrica2.html" },
        { name: "Omera 2", link: "omera2_prensas_fabrica2.html" },
        { name: "Omera 3", link: "omera3_prensas_fabrica2.html" },
        { name: "Omera 4", link: "omera4_prensas_fabrica2.html" },
        { name: "Pintura po 3", link: "pinturapo3_F2.html" },
        { name: "Pintura po 4", link: "pinturapo4_F2.html" },
        { name: "Cosma", link: "cosma_perfiladoras_fabrica2.html" },
        { name: "Fagor", link: "fagor_prensa_F3.html" },
        { name: "Fagor Gabinetes", link: "fagorGabinete_perfiladoras_fabrica2.html" },
        { name: "Jundiai", link: "jundiai_perfiladorasF3.html" },
        { name: "Olma FH", link: "olmaFH_perfiladoras_fabrica2.html" },
        { name: "Pintura Líquida", link: "pinturaliquidaF3.html" },
        { name: "Sares 1", link: "sares1_perfiladoras_fabrica2.html" },
        { name: "Sares 2", link: "sares2_perfiladoras_fabrica2.html" },
        { name: "Sares 3", link: "sares3_perfiladoraF3.html" },
        { name: "Sares 4", link: "sares4_perfiladorasF3.html" },
        { name: "Aida", link: "Aita_prensa_F3.html" }
    ];

    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('suggestions');

    if (!searchInput || !suggestionsBox) {
        console.error('Elemento de busca não encontrado no HTML!');
        return;
    }

    searchInput.addEventListener('input', function () {
        const input = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = '';

        if (input === '') {
            suggestionsBox.style.display = 'none';
            return;
        }

        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(input)
        );

        if (filteredItems.length === 0) {
            suggestionsBox.style.display = 'none';
            return;
        }

        filteredItems.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = item.name;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.addEventListener('click', () => {
                window.location.href = item.link;
            });
            suggestionsBox.appendChild(suggestionItem);
        });

        suggestionsBox.style.display = 'block';
    });

    // Fecha a caixa de sugestões se clicar fora
    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});
