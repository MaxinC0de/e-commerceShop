const titlesMen = ["Bleu Anthracite", "Beige", "Jaune", "Rouge Bordeau", "Gris Anthracite", "Bleu Foncé", "Rouge Foncé", "Vert Clair", "Jaune Clair", "Marron"]
const xsMen = [100, 150, 120, 170, 0, 215, 0, 120, 180, 100]
const sMen = [100, 150, 120, 0, 185, 215, 0, 120, 180, 100]
const mMen = [100, 0, 120, 170, 0, 215, 115, 120, 180, 100]
const lMen = [0, 150, 120, 170, 185, 215, 115, 120, 180, 0]
const xlMen = [100, 0, 120, 0, 185, 215, 115, 120, 180, 100]
const xxlMen = [100, 150, 0, 0, 185, 215, 115, 120, 180, 100]

const titlesWomen = ["Jaune Clair", "Gris Clair", "Blanc Foncé", "Marron Clair", "Bleu Ciel", "Rose Clair", "Satin", "Blanc & Gris", "A Rayures Bleues", "A Rayures Grises"]
const xsWomen = [100, 150, 120, 170, 0, 215, 0, 120, 180, 100]
const sWomen = [100, 150, 120, 0, 185, 215, 0, 120, 180, 100]
const mWomen = [100, 0, 120, 170, 0, 215, 115, 120, 180, 100]
const lWomen = [0, 150, 120, 170, 185, 215, 115, 120, 180, 0]
const xlWomen = [100, 0, 120, 0, 185, 215, 115, 120, 180, 100]
const xxlWomen = [100, 150, 0, 0, 185, 215, 115, 120, 180, 100]

export const men = Array.from({ length: 10 }).map((p, i) => ({
    id: i.toString(),
    title: `Tee-Shirt ${titlesMen[i]}`,
    price: 20,
    src: [`/images/men/${i + 1}/1.avif`, `/images/men/${i + 1}/2.avif`],
    sizes: {
        xs: xsMen[i],
        s: sMen[i],
        m: mMen[i],
        l: lMen[i],
        xl: xlMen[i],
        xxl: xxlMen[i]
    }
}))

export const women = Array.from({ length: 10 }).map((p, i) => ({
    id: i.toString(),
    title: `Tee-Shirt ${titlesWomen[i]}`,
    price: 20,
    src: [`/images/women/${i + 1}/1.avif`, `/images/women/${i + 1}/2.avif`],
    sizes: {
        xs: xsWomen[i],
        s: sWomen[i],
        m: mWomen[i],
        l: lWomen[i],
        xl: xlWomen[i],
        xxl: xxlWomen[i]
    }
}))