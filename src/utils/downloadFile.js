function downloadFile(path, name) {
  const link = document.createElement('a');
  link.href = path;
  link.download = name;
  link.dispatchEvent(new MouseEvent('click'));
  link.remove();
}

export default downloadFile;
