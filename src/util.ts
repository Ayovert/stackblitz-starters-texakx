export function openDiv(e) {
  console.log(e.target.id);
  console.log(e.target.id.includes('Preview'));
  let id1 = '';
  let id2 = '';
  if (e.target.id === 'maxPreview') {
    id1 = 'previewDiv';
    id2 = 'editorDiv';
  } else if (e.target.id === 'maxEditor') {
    id1 = 'editorDiv';
    id2 = 'previewDiv';
  }
  const el1 = document.getElementById(id1);
  console.log(el1, 'm');

  const el2 = document.getElementById(id2);
  console.log(el2, 'x');

  el1.classList.remove('hide');
  el1.classList.add('open');
  el2.classList.add('hide');
}

export function closeDiv(e) {
  console.log(e.target.id);
  let id1 = '';
  let id2 = '';
  if (e.target.id === 'minPreview') {
    id1 = 'previewDiv';
    id2 = 'editorDiv';
  } else if (e.target.id === 'minEditor') {
    id1 = 'editorDiv';
    id2 = 'previewDiv';
  }
  const el1 = document.getElementById(id1);
  console.log(el1, 'm');

  const el2 = document.getElementById(id2);
  console.log(el2, 'x');

  el1.classList.remove('hide');
  el2.classList.remove('open');
}