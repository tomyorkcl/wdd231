const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const copyrightParagraph = document. querySelector('footer p:first-of-type');
if (copyrightParagraph) {
    copyrightParagraph.innerHTML = '©${currentYear} 🗿 Tomas Contreras 🗿 Chile';
}

const modifiedParagraph = document.querySelector('footer p:last-of-type');
if (modifiedParagraph) {
    modifiedParagraph.innerHTML = 'Last modification: ${lastModifiedDate}';

}