document.addEventListener('DOMContentLoaded', () => {
  console.log("hello")
  const dataURL = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text'
  const ipsum = document.getElementById('ipsum')

  fetchIpsum()

  function fetchIpsum() {
    fetch(dataURL)
    .then(res => res.text())
    .then(setText)
  }

  function setText(text) {
    console.log(text)
    ipsum.innerText=text
  }

})
