const hitokoto = document.getElementById('hitokoto_text')
fetch('https://v1.hitokoto.cn')
  .then(response => response.json())
  .then(data => {
    hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)