let originalContents = [];

function highlightSearch() {
  const searchValue = document.getElementById('searchBox').value;
  const searchRegex = new RegExp(`(${searchValue})`, 'g');

  const contents = document.querySelectorAll('.content');
  if (originalContents.length === 0) {
    contents.forEach((el, index) => originalContents.push(el.innerHTML));
  }
  contents.forEach((el, index) => {
    const newContent = originalContents[index].replace(searchRegex, function (matched) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      return `<mark style="background-color:${randomColor};">${matched}</mark>`;
    });

    el.innerHTML = newContent;
  });
}

function resetHighlight() {
  const contents = document.querySelectorAll('.content');
  contents.forEach((el, index) => {
    el.innerHTML = originalContents[index];
  });
  originalContents = [];
}