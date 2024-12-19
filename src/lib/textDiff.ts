interface TextDiff {
  type: 'added' | 'removed' | 'unchanged';
  value: string;
}

export function computeTextDiff(original: string, modified: string): TextDiff[] {
  const words1 = original.split(/\s+/);
  const words2 = modified.split(/\s+/);
  const diffs: TextDiff[] = [];
  
  let i = 0, j = 0;
  
  while (i < words1.length || j < words2.length) {
    if (i >= words1.length) {
      // Rest of words2 are additions
      diffs.push({ type: 'added', value: words2[j] + ' ' });
      j++;
    } else if (j >= words2.length) {
      // Rest of words1 are removals
      diffs.push({ type: 'removed', value: words1[i] + ' ' });
      i++;
    } else if (words1[i] === words2[j]) {
      // Words match
      diffs.push({ type: 'unchanged', value: words1[i] + ' ' });
      i++;
      j++;
    } else {
      // Words differ
      diffs.push({ type: 'removed', value: words1[i] + ' ' });
      diffs.push({ type: 'added', value: words2[j] + ' ' });
      i++;
      j++;
    }
  }
  
  return diffs;
}