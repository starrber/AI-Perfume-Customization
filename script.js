document.getElementById('perfumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    // 这里应该调用后端API来生成香水配方，然后跳转到配方页面
    // 以下代码仅为示例，实际应用中需要替换为API调用
    window.location.href = 'formula.html';
});