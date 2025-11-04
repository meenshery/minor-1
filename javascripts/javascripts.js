document.addEventListener('DOMContentLoaded', function () {
    let toEn = false;

    const map = {
        '.p-surname': { ru: 'Карпова', en: 'KARPOVA' },
        '.p-name':    { ru: 'Мария',   en: 'MARIYA' },
        '.p-place':   { ru: 'Фрунзенское РУВД г. Минска', en: 'FRUNZENSKOE ROVD, MINSK' },
        '.p-birth':   { ru: '23.11.2004', en: '23.11.2004' },
        '.p-sex':     { ru: 'Ж', en: 'F' },
        '.p-date':    { ru: '11.11.2018', en: '11.11.2018' },
        '.p-num':     { ru: '23112004021892319', en: '23112004021892319' },
        '.p-city':    { ru: 'г. Минск', en: 'MINSK' }
    };

    const btn = document.querySelector('.change');
    if (!btn) return;

    btn.addEventListener('click', () => {
        toEn = !toEn;

        for (const [sel, tr] of Object.entries(map)) {
            const el = document.querySelector(sel);
            if (el) el.textContent = toEn ? tr.en : tr.ru;
        }

        btn.textContent = toEn ? 'Вернуть русский' : 'Изменить язык';
    });

    const elems = document.getElementsByTagName('h1');
    const surname = elems[0].textContent;
    const name = elems[1].textContent;
    const birth = elems[3].textContent;
        console.log('Фамилия:', surname);
        console.log('Имя:', name);
        console.log('Год рождения:', birth);
});

// алгоритмическая задача

    document.addEventListener('DOMContentLoaded', function () {
            const input = document.getElementById('num');
            const btn   = document.querySelector('.problem-btn');
            const result = document.querySelector('.problem-result');

        if (!input || !btn || !result) return;

        btn.addEventListener('click', function () {
        const a = parseFloat(String(input.value).replace(',', '.'));
        if (Number.isNaN(a)) {
            result.textContent = 'Введите число A';
            result.style.color = 'crimson';
            return;
        }

        const x = (a < 62)
        ? (a ** 2 + 4 + 5)
        : (1 / (a ** 2) + 4 * a + 5);

        result.style.color = '#000000ff';
        result.textContent = `При A = ${a}, результат X = ${x.toFixed(4)}`;
        });
    });
