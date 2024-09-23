document.getElementById('perfumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 生成随机香水配方
    const mainNotes = ['柑橘', '玫瑰', '香草', '麝香', '茉莉'];
    const supportingNotes = ['佛手柑', '橙花', '雪松', '琥珀', '檀香'];
    const randomMainNote = mainNotes[Math.floor(Math.random() * mainNotes.length)];
    const randomSupportingNotes = supportingNotes.map(note => note).slice(0, Math.floor(Math.random() * 3) + 1);

    // 显示随机香水配方
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>你的香水配方</h3>
        <p>主香调: ${randomMainNote}</p>
        <p>辅助香调: ${randomSupportingNotes.join(', ')}</p>
    `;
});