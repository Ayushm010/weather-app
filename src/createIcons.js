export function createIcons(iconName){
    const icon = document.createElement("img");
    icon.src = `./icons/${iconName}.svg`
    return icon;
}