const gatos: string[] = [
    'lora',
    'logan',
    'lebeau'
]

function exibeGatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibeGatos(gatos))