export function getExtractedText(text: string, maxTextLength = 150): string {
  return text.length > maxTextLength ? `${text.substring(0, maxTextLength - 3)}...` : text;
}

export function filterAvailableTags(tags: string[], availableTagNames: Set<string>): string[] {
  return availableTagNames.size > 0 ? tags.filter((tag) => availableTagNames.has(tag)) : tags;
}
