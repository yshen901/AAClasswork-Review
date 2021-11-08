export const RenderUtil = {
  generateHTML: (tag, className, text) => {
    return `<${tag} class="${className}">${text}</${tag}>`
  }
}