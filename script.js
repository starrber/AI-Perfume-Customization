document.getElementById('perfumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const description = document.getElementById('description').value; // 获取用户输入的描述

    // 创建一个FormData对象，用于发送数据到服务器
    const formData = new FormData();
    formData.append('description', description);

    // 使用fetch API发送数据到后端
    fetch('/api/generate-formula', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // 解析JSON响应
    .then(data => {
        if (data.success) {
            // 假设后端返回的配方数据包含在data.formula中
            document.getElementById('formula').innerHTML = `
                <p>香调: ${data.formula.mainNote}</p>
                <p>辅助香调: ${data.formula.supportingNotes.join(', ')}</p>
            `;
        } else {
            // 处理错误情况
            alert('无法生成香水配方，请重试或联系客服。');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('发生错误，请稍后再试。');
    });
});
