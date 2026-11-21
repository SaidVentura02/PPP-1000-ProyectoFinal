/* 
    @author jose.inestroza@unah.edu.hn, said.ventura@unah.hn
    @version 0.1.1
    @date 2026/11/20
    @since 2026/11/16
*/

const tag = (name, content) => `<${name}>${content}</${name}>`;

const h1 = (text) => tag("h1", text);
const h2 = (text) => tag("h2", text);
const h3 = (text) => tag("h3", text);
const p  = (text) => tag("p", text);
const s  = (text) => tag("strong", text);
const i  = (text) => tag("em", text);

const th = (text) => tag("th", text);
const td = (text) => tag("td", text);

export {
    h1,
    h2,
    h3,
    p,
    i,
    s,
    th,
    td
}
