
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>  _________                 .___.__               __          
 /   _____/__.__. ____    __| _/|__| ____ _____ _/  |_  ____  
 \_____  <   |  |/    \  / __ | |  |/ ___\\__  \\   __\/ __ \ 
 /        \___  |   |  \/ /_/ | |  \  \___ / __ \|  | \  ___/ 
/_______  / ____|___|  /\____ | |__|\___  >____  /__|  \___  >
        \/\/         \/      \/         \/     \/          \/ </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
