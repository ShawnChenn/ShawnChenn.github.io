const rows = [
  ['CLIP Retrieval', [3.5,13.8,24.1,12.8], [14.1,26.8,47.9,24.6]],
  ['BGE Retrieval', [13.8,27.6,37.9,25.7], [19.7,36.6,57.8,32.2]],
  ['UniMP', [24.1,31.0,61.4,33.9], [28.2,52.1,67.6,43.7]],
  ['Qwen2.5-VL-7B (zero-shot)', [13.8,31.0,58.6,28.0], [12.7,22.5,56.3,25.4]],
  ['GPT-5.4 (with evidence)', [31.0,44.8,55.2,41.6], [31.0,43.7,67.6,41.5]],
  ['GPT-4o', [30.9,33.6,40.4,36.8], [31.0,45.1,66.2,41.4]],
  ['IntentLens-7B', ['31.0 ± 1.7','44.8 ± 1.4','62.1 ± 1.1','40.2 ± 1.2'], ['33.8 ± 1.4','52.1 ± 1.0','70.4 ± 0.8','46.7 ± 1.1']],
  ['Oracle Ranker', [37.9,41.4,65.5,44.4], [43.7,53.5,76.1,53.7]]
];
const dataset = document.querySelector('#dataset');
dataset.addEventListener('change', () => {
  const column = dataset.value === 'google' ? 1 : 2;
  const name = dataset.selectedOptions[0].textContent;
  const body = document.querySelector('#results-body');
  body.replaceChildren(...rows.map(([label, google, yelp], index) => {
    const tr = document.createElement('tr');
    if (index === 6) tr.className = 'ours';
    if (index === 7) tr.className = 'oracle';
    const th = document.createElement('th');
    th.scope = 'row'; th.textContent = label; tr.append(th);
    (column === 1 ? google : yelp).forEach(value => {
      const td = document.createElement('td');
      td.textContent = typeof value === 'number' ? value.toFixed(1) : value;
      tr.append(td);
    });
    return tr;
  }));
  document.querySelector('#results-caption').textContent = `${name} · Selected baselines from Table 2 · All values in %`;
  document.querySelector('#results-status').textContent = `Showing results for ${name}.`;
});
const copyButton = document.querySelector('#copy-citation');
copyButton.addEventListener('click', async () => {
  const code = document.querySelector('#bibtex');
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(code.textContent);
    copyButton.textContent = 'Copied!';
    status.textContent = 'Citation copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code); selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});
