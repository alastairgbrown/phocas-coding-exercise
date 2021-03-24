export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0
        return (c === 'x' ? r : ((r & 0x3) | 0x8)).toString(16)
    });
}

export function syntaxHighlight(obj: any): string {
    const json = obj ? JSON.stringify(obj, null, 2) : 'null'
    const htmlPlain = json.replace(/[&<>]/g, m => `&#${m.charCodeAt(0)};`)
    const htmlColored = htmlPlain.replace(
        /"(\\.|[^"])*":?|true|false|null/g,
        m => `<span style='color:${/:$/.test(m) ? 'teal' : /^"/.test(m) ? 'darkred' : 'blue'}'>${m}</span>`)
    return htmlColored
  }
  
  