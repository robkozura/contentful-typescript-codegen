export default function renderInterfaceProperty(
  name: string,
  type: string,
  required: boolean,
  localization: boolean,
  description?: string,
): string {
  return [
    descriptionComment(description),
    name,
    "?",
    ": ",
    localization ? `LocalizedField<${type}>` : type,
    " | undefined",
    ";",
  ].join("")
}

function descriptionComment(description: string | undefined) {
  if (description) {
    return `/** ${description} */\n`
  } else {
    return ""
  }
}
